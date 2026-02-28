'use client'
import { AtSign, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputStyle = (name: string) => ({
    background: focused === name ? 'rgba(249,115,22,0.06)' : 'var(--glass-bg-input)',
    backdropFilter: 'var(--glass-blur)',
    WebkitBackdropFilter: 'var(--glass-blur)',
    border: `1px solid ${focused === name ? 'var(--orange-500)' : 'var(--glass-border)'}`,
    borderRadius: 'var(--radius-md)',
    color: 'var(--text-primary)',
    width: '100%',
    padding: '14px 18px',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    boxShadow: focused === name ? '0 0 0 3px rgba(249,115,22,0.12)' : 'none',
    transition: 'all 0.25s ease',
  })

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: info */}
        <div>
          <p className="uppercase tracking-widest text-xs font-semibold mb-4" style={{ color: 'var(--orange-400)' }}>
            Contact
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Let&apos;s build something
            <br />
            <span className="gradient-text">remarkable</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
            Whether you have a project in mind or just want to explore what GlassUI can do — we&apos;d love to hear from you.
          </p>

          {/* Contact methods */}
          {[
            { icon: <AtSign  />, label: 'Email', value: 'origin.inf.mail@gmail.com' },
            { icon: <Phone  />, label: 'Phone', value: '+91-9546733410' },
            { icon: <MessageCircle  />, label: 'Response', value: 'Within 24 hours' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--orange-400)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1px' }}>{item.label}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: form */}
        <div
          className="rounded-3xl p-8"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur-heavy)',
            WebkitBackdropFilter: 'var(--glass-blur-heavy)',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-shadow-lg)',
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, var(--orange-500), var(--blue-500))' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '8px' }}>Message sent!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Maya"
                    required
                    style={inputStyle('first')}
                    onFocus={() => setFocused('first')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Thornton"
                    required
                    style={inputStyle('last')}
                    onFocus={() => setFocused('last')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="maya@company.com"
                  required
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  SUBJECT
                </label>
                <select
                  style={{ ...inputStyle('subject'), cursor: 'pointer' }}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" style={{ background: 'var(--bg-surface)' }}>Select a topic</option>
                  <option value="sales" style={{ background: 'var(--bg-surface)' }}>Sales inquiry</option>
                  <option value="support" style={{ background: 'var(--bg-surface)' }}>Technical support</option>
                  <option value="partnership" style={{ background: 'var(--bg-surface)' }}>Partnership</option>
                  <option value="other" style={{ background: 'var(--bg-surface)' }}>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  MESSAGE
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  style={{ ...inputStyle('message'), resize: 'none' }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 rounded"
                  style={{ accentColor: 'var(--orange-500)' }}
                />
                <label htmlFor="consent" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <button
                type="submit"
                className="btn-glass btn-primary w-full"
                style={{ padding: '14px', fontSize: '0.95rem', borderRadius: 'var(--radius-md)', justifyContent: 'center' }}
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
