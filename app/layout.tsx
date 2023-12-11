import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-chatbot-kit/build/main.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
import { Cursor } from '@/components/cursor'
import { Footer } from '@/components/footer/footer'
import ToasterProvider from '@/providers/toaster-provider'
import { LenisProvider } from '@/providers/lenis-provider'
import { ChatbotProvider } from '@/components/chatbot/chatbot-provider'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://baudys.dev'),
  title: 'Daniel Anthony Baudyš',
  description: '',
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
          <LenisProvider />
          <Cursor />
          <ChatbotProvider />

          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
        ></Script>
        <Script>
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());

             gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
          `}
        </Script>
      </body>
    </html>
  )
}
