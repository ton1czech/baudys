import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
import { Cursor } from '@/components/cursor'
import { Footer } from '@/components/footer/footer'
import ToasterProvider from '@/providers/toaster-provider'
import { siteConfig } from '@/config/site'
import './globals.css'
import { Cookies } from '@/components/cookies'
import { AnalyticsProvider } from '@/providers/analytics-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://baudys.dev'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    { name: 'Daniel Anthony Baudyš', url: 'https://github.com/ton1czech' },
  ],
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <AnalyticsProvider />

      <body
        className={cn(
          'antialiased scroll-smooth overflow-x-hidden',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ToasterProvider />

          <Cursor />
          <Cookies />

          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
