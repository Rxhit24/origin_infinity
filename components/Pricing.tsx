'use client'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, annual: 0 },
    desc: 'Perfect for personal projects and exploration.',
    accent: 'none',
    features: ['30 Components', 'CSS Variables', 'Dark Mode', 'Community Support'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 29, annual: 19 },
    desc: 'For professionals shipping production products.',
    accent: 'orange',
    features: ['120+ Components', 'Motion System', 'Figma Kit', 'Priority Support', 'Updates forever', 'Theme Builder'],
    cta: 'Get Pro',
    popular: true,
  },
  {
    name: 'Team',
    price: { monthly: 79, annual: 59 },
    desc: 'For teams building at scale with shared design systems.',
    accent: 'blue',
    features: ['Unlimited Projects', 'Team Access', 'Custom Tokens', 'Slack Support', 'Design Reviews', 'SLA Guarantee'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-xs font-semibold mb-4" style={{ color: 'var(--orange-400)' }}>
            Pricing
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>

          {/* Toggle */}
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl glass"
          >
            <span style={{ fontSize: '0.85rem', color: !annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-all duration-300"
              style={{ background: annual ? 'var(--orange-500)' : 'rgba(255,255,255,0.15)' }}
            >
              <span
                className="absolute top-1 rounded-full bg-white transition-all duration-300"
                style={{
                  width: '16px', height: '16px',
                  left: annual ? '26px' : '4px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                }}
              />
            </button>
            <span style={{ fontSize: '0.85rem', color: annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>Annual</span>
            {annual && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(249,115,22,0.2)', color: 'var(--orange-300)' }}
              >
                Save 35%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 relative transition-all duration-300 hover:-translate-y-1"
              style={{
                background: plan.popular
                  ? 'linear-gradient(135deg, rgba(249,115,22,0.14), rgba(59,130,246,0.08))'
                  : 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                border: plan.popular
                  ? '1px solid rgba(249,115,22,0.35)'
                  : '1px solid var(--glass-border)',
                boxShadow: plan.popular ? '0 20px 60px rgba(249,115,22,0.2)' : 'var(--glass-shadow)',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, var(--orange-500), var(--blue-500))',
                    color: 'white',
                    letterSpacing: '0.08em',
                    boxShadow: '0 4px 12px var(--orange-glow)',
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                {plan.name}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>
                {plan.desc}
              </p>

              <div className="mb-8">
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    fontWeight: 700,
                    background: plan.accent === 'orange'
                      ? 'linear-gradient(135deg, var(--orange-400), var(--orange-500))'
                      : plan.accent === 'blue'
                      ? 'linear-gradient(135deg, var(--blue-400), var(--blue-500))'
                      : 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ${annual ? plan.price.annual : plan.price.monthly}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {plan.price.monthly > 0 ? '/mo' : ' forever'}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: plan.accent === 'orange'
                          ? 'rgba(249,115,22,0.2)'
                          : plan.accent === 'blue'
                          ? 'rgba(59,130,246,0.2)'
                          : 'rgba(255,255,255,0.08)',
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={plan.accent === 'orange' ? 'var(--orange-400)' : plan.accent === 'blue' ? 'var(--blue-400)' : 'white'} strokeWidth="3">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn-glass w-full ${plan.popular ? 'btn-primary' : plan.accent === 'blue' ? 'btn-blue' : 'btn-secondary'}`}
                style={{ justifyContent: 'center' }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
