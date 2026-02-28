'use client'
import { useState } from 'react'
import H2 from './ui/H2'
import Label from './ui/Label'
import Image from 'next/image'

const slides = [
  {
    title: 'Contribution to Viksit Bharat, Make in India',
    subtitle: 'Make In INDIA',
    desc: 'Through education, health, ethical innovation, and humanity, Origin Infinity actively contributes to the vision of a Developed India (Viksit Bharat). Empowering humanity, innovating with values, and creating infinite possibilities for a better, inclusive future',
    tone: 'blue',
    image: '/assets/carausel_vikshit.webp',
    items: ['Uttam Bharat', 'Sarvshrest Bharat', 'Vikshit Bharat'],
  },
  
  {
    title: 'Ethical Innovation & Technology',
    subtitle: 'Architecture, Data, Web',
    desc: 'Innovation must be guided by responsibility and trust. Origin Infinity promotes ethical innovation where technology serves humanity, solves real-world problems, and creates sustainable value rather than short-term gains.',
    tone: 'orange',
    image: '/assets/carausel_innovation.webp',
    items: ['Data', 'Design', 'Value'],
  },
  {
    title: 'Quality Education for Empowerment',
    subtitle: 'Architecture',
    desc: 'Origin Infinity views education as the most powerful tool to empower minds, build confidence, and nurture future leaders. Through education-driven initiatives, the organization aims to create individuals who think critically, act ethically, and contribute positively to society.',
    tone: 'blue',
    image: '/assets/carausel_education.webp',
    items: ['Top Colleges', 'Afforadble', 'Achieve Your goal'],
  },
  {
    title: 'Human Health, Innvoation & Well-being',
    subtitle: 'Health, Medical, Care',
    desc: 'A progressive nation depends on healthy individuals. Origin Infinity supports health awareness, innovation, and accessibility, recognizing that physical and mental well-being are essential for productivity, resilience, and social stability.',
    tone: 'orange',
    image: '/assets/carausel_health1.webp',
    items: ['Medical Equipment', 'Health Support', 'Health Care'],
  },
  
  {
    title: 'Sustainable Growth & Environmental Care',
    subtitle: 'Architecture',
    desc: 'Development must remain in balance with nature. Origin Infinity is committed to sustainable growth that protects natural resources and ensures a safe, livable future for generations to come.',
    tone: 'blue',
    image: '/assets/carausel_env.webp',
    items: ['Reduce Carbon footprint', 'Global Warming', 'Plant Trees'],
  },
  
]

export default function Carousel() {
  const [active, setActive] = useState(0)

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + slides.length) % slides.length)
  }

  const s = slides[active]
  const isOrange = s.tone === 'orange'

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Label title='VISION' />
          <H2 title='Human First ' gradientTitle='Approach' newLine={false}/>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden transition-all duration-500 "
          style={{
            background: isOrange
              ? 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(6,10,20,0.6))'
              : 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(6,10,20,0.6))',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: `1px solid ${isOrange ? 'rgba(249,115,22,0.25)' : 'rgba(59,130,246,0.25)'}`,
            boxShadow: isOrange ? 'var(--glass-shadow-orange)' : 'var(--glass-shadow-blue)',
            minHeight: '475px',
          }}
        >
          {/* Inner content */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                  style={{
                    background: isOrange ? 'rgba(249,115,22,0.15)' : 'rgba(59,130,246,0.15)',
                    color: isOrange ? 'var(--orange-300)' : 'var(--blue-300)',
                    border: `1px solid ${isOrange ? 'rgba(249,115,22,0.2)' : 'rgba(59,130,246,0.2)'}`,
                  }}
                >
                  {s.subtitle}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 2rem, 1.6rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: '16px',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem', minHeight: '130px' }}>
                  {s.desc}
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div
              className="flex items-center justify-center p-6 sm:p-10 relative"
              style={{
                borderLeft: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="relative transition-all duration-500 rounded-xl overflow-hidden min-h-[200px] min-w-[200px]"
                style={{
                  filter: `drop-shadow(0 0 40px ${isOrange ? 'var(--orange-glow)' : 'var(--blue-glow)'})`,
                }}
              >
                <Image src={s.image} fill={true} objectFit='cover' alt='Carausel Image'/>
              </div>
              {/* Slide number */}
              <div
                className="absolute bottom-0 sm:bottom-6 right-14 sm:right-8 text-sm font-mono"
                style={{ color: 'var(--text-muted)' }}
              >
                {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div
            className="flex items-center justify-between px-10 py-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: active === i ? '24px' : '8px',
                    height: '8px',
                    background: active === i
                      ? isOrange ? 'var(--orange-500)' : 'var(--blue-500)'
                      : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            <div className="flex gap-2">
              {[-1, 1].map((dir) => (
                <button
                  key={dir}
                  onClick={() => go(dir)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = isOrange
                      ? 'rgba(249,115,22,0.2)' : 'rgba(59,130,246,0.2)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = isOrange
                      ? 'rgba(249,115,22,0.4)' : 'rgba(59,130,246,0.4)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    {dir === -1
                      ? <path d="M19 12H5M12 19l-7-7 7-7"/>
                      : <path d="M5 12h14M12 5l7 7-7 7"/>}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
