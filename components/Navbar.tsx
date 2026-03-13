'use client'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()
  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setScrolled(window.scrollY > 20)
      setMenuOpen(false)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  const links = [
    {title:'Projects',link:'/projects'},
    {title:'Services',link:'/services'},
    {title:'About',link:'/about'},
    {title:'Contact',link:'/contact'}
  ]

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const scrolledBg = isDark
    ? 'rgba(6,10,20,0.80)'
    : 'rgba(244,246,251,0.85)'
  const scrolledBorder = isDark
    ? '1px solid rgba(255,255,255,0.08)'
    : '1px solid rgba(0,0,0,0.07)'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? scrolledBg : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? scrolledBorder : '1px solid transparent',
        boxShadow: scrolled ? 'var(--glass-shadow)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-[40px] h-[40px] rounded-xl flex items-center justify-center animate-pulse-glow"
            style={{
              background: 'linear-gradient(135deg, var(--orange-500), var(--blue-500))',
              boxShadow: '0 0 20px var(--orange-glow)',
            }}
          >
            <Image src="/origin_logo.webp" alt="Origin Infinity Logo" width={40} height={40} /> 
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>
            Origin <span className="gradient-text">Infinity</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                href={link.link}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  color: isActiveLink(link.link) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  background: isActiveLink(link.link) ? 'var(--glass-bg)' : 'transparent',
                  border: isActiveLink(link.link) ? '1px solid var(--glass-border)' : '1px solid transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* <button className="btn-glass btn-secondary text-sm px-5 py-2">Sign In</button> */}
          <Link href={'/launch-program'} className="btn-glass btn-primary text-sm px-5 py-2">Launch Program</Link>
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-xl glass transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              {[0,1,2].map(i => (
                <span
                  key={i}
                  className="block h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: 'var(--orange-400)',
                    transformOrigin: 'left',
                    transform: menuOpen && i === 0 ? 'rotate(45deg)' : menuOpen && i === 2 ? 'rotate(-45deg)' : menuOpen && i === 1 ? 'scaleX(0)' : 'none',
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden mx-4 mb-4 rounded-2xl p-4 glass animate-slide-up"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="block px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-all"
              style={{
                color: isActiveLink(link.link) ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: isActiveLink(link.link) ? 'var(--glass-bg-hover)' : 'transparent',
                border: isActiveLink(link.link) ? '1px solid var(--glass-border)' : '1px solid transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                ;(e.currentTarget as HTMLElement).style.background = 'var(--glass-bg-hover)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              {link.title}
            </Link>
          ))}
          <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: '1px solid var(--glass-border)' }}>
            {/* <button className="btn-glass btn-secondary text-sm flex-1">Sign In</button> */}
            <Link href={'/launch-program'} className="btn-glass btn-primary text-sm px-5 py-2">Launch Program</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
