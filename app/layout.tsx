import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Providers from './providers'

import Navbar from './components/Navbar'
import ThemeSwitch from "./components/ThemeSwitch";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-Port',
  description: 'Meu portfólio em Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
