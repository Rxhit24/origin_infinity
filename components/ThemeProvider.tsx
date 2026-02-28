'use client'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with dark to match the server render — we'll correct on mount
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // On mount, read from localStorage or fall back to system preference
    const stored = localStorage.getItem('glassui-theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const resolved: Theme = stored ?? (prefersDark ? 'dark' : 'light')

    setTheme(resolved)
    document.documentElement.setAttribute('data-theme', resolved)
    setMounted(true)
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'

      // Brief transition class so elements animate smoothly
      document.documentElement.classList.add('theme-transitioning')
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('glassui-theme', next)

      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning')
      }, 400)

      return next
    })
  }, [])

  // Suppress render until client theme is resolved to avoid flash
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme, toggle }}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
