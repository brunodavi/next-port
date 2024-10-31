"use client"

import { MdLightMode, MdNightlight } from "react-icons/md";
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const ThemeIcon = theme === 'light' ? MdNightlight : MdLightMode

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="cursor-pointer">
      <ThemeIcon size={24} onClick={toggleTheme} />
    </div>
  )
}
