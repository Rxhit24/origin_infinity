'use client'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === 'undefined') {
      return 'dark'
    }

    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'

      document.documentElement.classList.add('theme-transitioning')
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('glassui-theme', next)

      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning')
      }, 400)

      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
