'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useTheme } from './ThemeProvider'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  pulse: number
  pulseSpeed: number
}

const PARTICLE_COUNT = 60
const CONNECTION_DIST = 140
const MOUSE_RADIUS = 180
const MOUSE_FORCE = 0.6

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animRef = useRef<number>(0)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const createParticles = useCallback((w: number, h: number): Particle[] => {
    const particles: Particle[] = []
    const oranges = ['249,115,22', '234,88,12', '251,146,60']
    const blues = ['59,130,246', '37,99,235', '96,165,250']
    const colors = [...oranges, ...blues]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const color = colors[i % colors.length]
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.2 + 1,
        color,
        alpha: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Regenerate particles on resize
      particlesRef.current = createParticles(rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    const draw = () => {
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      const particles = particlesRef.current
      const mouse = mouseRef.current

      ctx.clearRect(0, 0, w, h)

      const globalAlphaScale = isDark ? 1 : 0.7

      // Update + draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Pulse
        p.pulse += p.pulseSpeed
        const pulseAlpha = Math.sin(p.pulse) * 0.15

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distMouse = Math.sqrt(dx * dx + dy * dy)
        if (distMouse < MOUSE_RADIUS && distMouse > 0) {
          const force = (1 - distMouse / MOUSE_RADIUS) * MOUSE_FORCE
          p.vx += (dx / distMouse) * force
          p.vy += (dy / distMouse) * force
        }

        // Damping
        p.vx *= 0.995
        p.vy *= 0.995

        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        // Draw glow
        const currentAlpha = (p.alpha + pulseAlpha) * globalAlphaScale
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4)
        glow.addColorStop(0, `rgba(${p.color}, ${currentAlpha * 0.6})`)
        glow.addColorStop(1, `rgba(${p.color}, 0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const ddx = a.x - b.x
          const ddy = a.y - b.y
          const dist = Math.sqrt(ddx * ddx + ddy * ddy)
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.18 * globalAlphaScale
            // Blend the two particle colours
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${a.color}, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [isDark, createParticles])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  )
}
