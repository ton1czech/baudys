import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
import { Cursor } from '@/components/cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Anthony Baudyš',
  description: '',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('antialiased scroll-smooth', inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/* <Cursor /> */}

          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
