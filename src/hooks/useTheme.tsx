import { useEffect, useState } from 'react'

/**
 * a custom hook to switch between light mode and dark mode
 * @default "dark"
 * @returns
 */
const useTheme = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement
      if (theme === 'light') {
        html.className = 'light'
      } else {
        html.className = 'dark'
      }
    }
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}

export default useTheme
