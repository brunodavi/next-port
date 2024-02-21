"use client"

import { MdLightMode, MdNightlight } from "react-icons/md";
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, systemTheme, setTheme } = useTheme()

  const theme = (!resolvedTheme || resolvedTheme === 'system')
    ? systemTheme ?? 'light'
    : resolvedTheme

  const ThemeIcon = (theme === 'light')
    ? MdNightlight
    : MdLightMode

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="fixed cursor-pointer bottom-5 right-5 z-50">
      <ThemeIcon size={24} onClick={toggleTheme} />
    </div>
  )
}
