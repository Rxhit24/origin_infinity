'use client'

const testimonials = [
  {
    name: 'Maya Thornton',
    role: 'Lead Designer @ Vercel',
    avatar: 'MT',
    quote: 'GlassUI completely transformed how our team thinks about component design. The orange-blue palette is unlike anything else — it feels premium without being cold.',
    stars: 5,
    accent: 'orange',
  },
  {
    name: 'Daniel Reeves',
    role: 'Founder @ Orbit Labs',
    avatar: 'DR',
    quote: 'Shipped our entire dashboard in 3 weeks using GlassUI. The CSS variables approach meant zero design conflicts. Every component just works together out of the box.',
    stars: 5,
    accent: 'blue',
  },
  {
    name: 'Sophie Chen',
    role: 'Frontend Eng @ Linear',
    avatar: 'SC',
    quote: 'I have tried every glassmorphism library out there. This is the first one where the motion system actually makes sense. The accordion and carousel feel alive.',
    stars: 5,
    accent: 'orange',
  },
  {
    name: 'Alex Moreau',
    role: 'Creative Dir @ Studio Flux',
    avatar: 'AM',
    quote: 'The depth of thought in the token system is impressive. Clients immediately react to the glass interfaces we build — they always ask how we made it look this good.',
    stars: 5,
    accent: 'blue',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-xs font-semibold mb-4" style={{ color: 'var(--blue-400)' }}>
            Social Proof
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Loved by <span className="gradient-text">builders worldwide</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = t.accent === 'orange' ? 'rgba(249,115,22,0.3)' : 'rgba(59,130,246,0.3)'
                el.style.boxShadow = t.accent === 'orange' ? 'var(--glass-shadow-orange)' : 'var(--glass-shadow-blue)'
                el.style.background = t.accent === 'orange'
                  ? 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(234,88,12,0.04))'
                  : 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(29,78,216,0.04))'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--glass-border)'
                el.style.boxShadow = 'var(--glass-shadow)'
                el.style.background = 'var(--glass-bg)'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--orange-400)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="mb-6"
                style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: t.accent === 'orange'
                      ? 'linear-gradient(135deg, var(--orange-500), var(--orange-600))'
                      : 'linear-gradient(135deg, var(--blue-500), var(--blue-600))',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    boxShadow: t.accent === 'orange' ? '0 4px 12px var(--orange-glow)' : '0 4px 12px var(--blue-glow)',
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
