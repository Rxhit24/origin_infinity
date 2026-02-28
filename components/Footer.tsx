'use client'

import { Facebook, icons, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const links = {
    Services: ['IT Service', 'Mediform', 'NGO Connectivity', 'Education', 'Human Health'],
    Associations: ['Social Welfare Foundation', 'Young Udaan', 'Narayan Seva Sanstha'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Security'],
  }
  const socials = [
    {title :'facebook', link:'https://www.facebook.com/profile.php?id=61585815162734&mibextid=ZbWKwL', icon:  <Facebook size={18} />},
    {title :'instagram', link:'https://www.instagram.com/origin_infinity_pvt.ltd?igsh=eDR2b285Yjc0bnhu', icon: <Instagram size={18}/>},
    {title :'linkedin', link:'https://www.linkedin.com/company/origin-infinity-private-limited/', icon: <Linkedin size={18}/>},
    {title :'whatsapp', link:'https://whatsapp.com/channel/0029VbCNW6UBadmXMauYrU3r', icon: <MessageCircle size={18}/>}
  ]

  return (
    <footer
      className="relative mt-12"
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'rgba(6,10,20,0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-[40px] h-[40px] rounded-xl flex items-center justify-center"
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
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '20px' }}>
              The glass-first component system for modern web products.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--orange-400)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.3)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4
                className="mb-4 text-xs uppercase tracking-widest font-semibold"
                style={{ color: 'var(--text-secondary)' }}
              >
                {section}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors duration-200"
                      style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
                      onMouseEnter={e => {
                        (e.target as HTMLElement).style.color = 'var(--orange-400)'
                      }}
                      onMouseLeave={e => {
                        (e.target as HTMLElement).style.color = 'var(--text-muted)'
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8"
          style={{ borderTop: '1px solid var(--glass-border)' }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Origin Infinity Private Limited. Built with passion and obsession for brighter tomorrow.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
              style={{
                background: 'rgba(249,115,22,0.1)',
                border: '1px solid rgba(249,115,22,0.2)',
                color: 'var(--orange-300)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ boxShadow: '0 0 6px #4ade80' }} />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
