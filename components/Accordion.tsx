'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Why choose Origin Infinity?',
    a: 'We combine technology with human values, ethical innovation, and long-term vision to deliver reliable solutions with real impact.',
  },
  {
    q: 'Do you develop custom websites and applications?',
    a: 'Yes, we design and develop fully customized websites and mobile applications based on your business requirements and goals.',
  },
  {
    q: 'How do you ensure data security and privacy?',
    a: 'We follow industry best practices and implement advanced security measures to protect data, ensure privacy, and maintain system reliability.',
  },
  {
    q: 'Who can work with Origin Infinity',
    a: 'Businesses, startups, institutions, NGOs, and individuals can collaborate with us for technology solutions or social initiatives.',
  },
  {
    q: 'What services does Origin Infinity Pvt. Ltd. offer?',
    a: 'We provide IT solutions including software development, web and mobile application development, security systems, and social impact initiatives through NGO connectivity and awareness programs.',
  },
]

export default function Accordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-widest text-xs font-semibold mb-4"
            style={{ color: 'var(--blue-400)' }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: open === i
                  ? 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(59,130,246,0.06))'
                  : 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                border: `1px solid ${open === i ? 'rgba(249,115,22,0.3)' : 'var(--glass-border)'}`,
                boxShadow: open === i ? '0 8px 32px rgba(249,115,22,0.12)' : 'none',
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: open === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                  }}
                >
                  {faq.q}
                </span>
                <div
                  className="flex-shrink-0 ml-4 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: open === i
                      ? 'linear-gradient(135deg, var(--orange-500), var(--blue-500))'
                      : 'var(--glass-bg-strong)',
                    border: '1px solid var(--glass-border)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: open === i ? '300px' : '0',
                  opacity: open === i ? 1 : 0,
                }}
              >
                <p
                  className="px-6 pb-5"
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.9rem',
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '16px',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
