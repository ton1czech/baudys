import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import { siteConfig } from '@/config/site'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'overflow-x-hidden scroll-smooth antialiased',
          inter.className,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
