import type { Metadata } from 'next'
import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { company } from '@/app/siteContent'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: 'Origin Infinity | Innovation With Humanity',
    template: '%s',
  },
  description: company.tagline,
  applicationName: company.shortName,
  keywords: [
    'Origin Infinity',
    'IT solutions',
    'education services',
    'human health',
    'NGO connectivity',
    'sustainability',
    'innovation',
  ],
  openGraph: {
    title: 'Origin Infinity | Innovation With Humanity',
    description: company.tagline,
    url: company.siteUrl,
    siteName: company.shortName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin Infinity | Innovation With Humanity',
    description: company.tagline,
  },
}

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('glassui-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
