import type { Metadata } from 'next'
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

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Anthony Baudyš',
  description: '',
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
      </body>
    </html>
  )
}
