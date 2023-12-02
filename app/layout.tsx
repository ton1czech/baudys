import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Anthony Baudyš',
  description: '',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('antialiased scroll-smooth', inter.className)}>
        {children}
      </body>
    </html>
  )
}
