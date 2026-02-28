'use client'

import Link from "next/link"
import Badge from "./ui/Badge"
import { ArrowRight, Heart, Play } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute animate-float"
          style={{
            width: '600px', height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)',
            top: '-100px', left: '-100px',
            filter: 'blur(40px)',
            animationDuration: '8s',
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            width: '500px', height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
            bottom: '-50px', right: '-100px',
            filter: 'blur(40px)',
            animationDuration: '10s',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            width: '300px', height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
            top: '40%', right: '20%',
            filter: 'blur(30px)',
            animationDuration: '7s',
            animationDelay: '1s',
          }}
        />

        {/* Spinning ring */}
        <div
          className="absolute animate-spin-slow"
          style={{
            width: '800px', height: '800px',
            borderRadius: '50%',
            border: '1px solid rgba(249,115,22,0.08)',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '600px', height: '600px',
            borderRadius: '50%',
            border: '1px solid rgba(59,130,246,0.06)',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            animation: 'spin-slow 15s linear infinite reverse',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Link href='/about-us'>
          <Badge title="Innovation with Humanity"  startIcon={<Heart  color="var(--orange-300)" size={20}/>} endIcon={<ArrowRight color="var(--orange-300)" size={20}/>}/>
        </Link>

        <h1
          className="animate-slide-up delay-100 mt-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 5vw, 6rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}
        >
          The Origin of
          <br />
          <span className="gradient-text">Infinite Possibilities</span>
        </h1>

        <p
          className="animate-slide-up delay-200 mx-auto"
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '1280px',
            lineHeight: 1.7,
            marginBottom: '48px',
          }}
        >
          We don’t follow the future, we create it with limitless vision, human values, and purposeful innovation. Origin Infinity stands where ideas become impact, technology serves humanity, and every step moves toward a sustainable, intelligent, and empowered tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
          <Link href={'/launch-program'}
            className="btn-glass btn-primary"
            style={{ fontSize: '1rem', padding: '14px 36px', borderRadius: '14px' }}
          >
            <Play />
            Launch Program
          </Link>
          <Link href={'services'}
            className="btn-glass btn-secondary"
            style={{ fontSize: '1rem', padding: '14px 36px', borderRadius: '14px' }}
          >
            View Services
            <ArrowRight />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 mb-16 animate-slide-up delay-500">
          {[
            { value: '57+', label: 'Succesfull Projects' },
            { value: '105+', label: 'Experts & colleagues' },
            { value: '10', label: 'Years Of Experience' },
            { value: '★', label: 'MSME Certified ' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-4 rounded-2xl glass text-center"
              style={{ minWidth: '120px' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  background: 'var(--gradient-text)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
