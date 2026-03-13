'use client'

import { Facebook, Heart, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/app/siteContent";

export default function Footer() {
  const links = {
    Services: [
      { label: 'IT Service', href: '/services/it' },
      { label: 'Education', href: '/services/education' },
      { label: 'Human Health', href: '/services/health' },
      { label: 'NGO Connectivity', href: '/services/ngo-connectivity' },
      { label: 'Innovation', href: '/services/innovation' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    Reach: company.reach.map((item) => ({ label: item, href: '/contact' })),
  };

  const socials = [
    { title: 'facebook', link: 'https://www.facebook.com/profile.php?id=61585815162734&mibextid=ZbWKwL', icon: <Facebook size={18} /> },
    { title: 'instagram', link: 'https://www.instagram.com/origin_infinity_pvt.ltd?igsh=eDR2b285Yjc0bnhu', icon: <Instagram size={18} /> },
    { title: 'linkedin', link: 'https://www.linkedin.com/company/origin-infinity-private-limited/', icon: <Linkedin size={18} /> },
    { title: 'whatsapp', link: 'https://whatsapp.com/channel/0029VbCNW6UBadmXMauYrU3r', icon: <MessageCircle size={18} /> }
  ];

  return (
    <footer
      className="relative mt-12"
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'var(--footer-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div
                className="flex h-[40px] w-[40px] items-center justify-center rounded-xl"
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
            <p style={{ color: 'var(--footer-muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {company.tagline}
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--footer-link)',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4 text-sm" style={{ color: 'var(--footer-muted)' }}>
              {company.phone} <br /> {company.email}
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                {section}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors duration-200" style={{ color: 'var(--footer-link)', fontSize: '0.85rem' }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row" style={{ borderTopColor: 'var(--glass-border)' }}>
          <p style={{ color: 'var(--footer-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} {company.name}. Built for a brighter, more capable tomorrow.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
              style={{
                background: 'rgba(249,115,22,0.1)',
                border: '1px solid rgba(249,115,22,0.2)',
                color: 'var(--orange-300)',
              }}
            >
              {/* <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" style={{ boxShadow: '0 0 6px #ff0000' }} /> */}
              <Heart fill="red" color="red" size={14} />
              Design And Developed by Origin Infinity
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
              style={{
                background: 'rgba(249,115,22,0.1)',
                border: '1px solid rgba(249,115,22,0.2)',
                color: 'var(--orange-300)',
              }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px #4ade80' }} />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
