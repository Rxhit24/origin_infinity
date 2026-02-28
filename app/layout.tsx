import type { Metadata } from 'next'
import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'
import Navbar from '@/components/Navbar'

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
  title: 'GlassUI — Orange & Blue Glassmorphism',
  description: 'A stunning glassmorphism UI kit with orange and blue tones',
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
    <html lang="en" 
    className={`${syne.variable} ${plusJakarta.variable}`}
    suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC: sets data-theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}