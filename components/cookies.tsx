'use client'

import { useCookies } from '@/store/use-cookies'
import { useLanguage } from '@/store/use-language'
import { Button } from './ui/button'
import { useEffect } from 'react'
import { Container } from './container'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCursor } from '@/store/use-cursor'

export const Cookies = () => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()
  const {
    isOpen,
    openCookies,
    closeCookies,
    closeCookiesPermanently,
    setCookiesEnabled,
  } = useCookies()

  useEffect(() => {
    if (!document.cookie.includes('cookiesClosed')) {
      openCookies()
    }
  }, [openCookies])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='cookies'
          initial={{ opacity: 0, scaleY: 0.5 }}
          animate={{
            opacity: 1,
            scaleY: 1,

            transition: {
              duration: 0.2,
              ease: [0.82, 0, 0.19, 0],
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          transition={{ delay: 0.1 }}
          className='bg-violet-800 fixed w-screen left-0 bottom-0 z-[999] origin-bottom'
        >
          <Container className='relative flex flex-col gap-8 py-4 lg:py-12'>
            <h3 className='text-zinc-200'>
              {language === 'cs' &&
                'Cookies používám pouze pro analytické účely a pro ukládání zvoleného jazyka do prohlížeče.'}
              {language === 'en' &&
                'I only use cookies for analytical purposes and to store the selected language in the browser.'}
            </h3>
            <div className='flex flex-col md:flex-row gap-4'>
              <Button
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
                onClick={() => {
                  setCookiesEnabled()
                  closeCookiesPermanently()
                }}
                className='bg-white rounded-2xl py-6 text-lg text-black hover:bg-zinc-100 w-full font-bold'
              >
                {language === 'cs' && 'Souhlasím'}
                {language === 'en' && 'Agree'}
              </Button>
              <Button
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
                onClick={closeCookiesPermanently}
                className='bg-white rounded-2xl py-6 text-lg text-black hover:bg-zinc-100 w-full font-bold'
              >
                {language === 'cs' && 'Nesouhlasím'}
                {language === 'en' && 'Disagree'}
              </Button>
              <Button
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
                onClick={closeCookies}
                className='bg-white rounded-2xl py-6 text-lg text-black hover:bg-zinc-100 w-full font-bold'
              >
                {language === 'cs' && 'Zavřít'}
                {language === 'en' && 'Close'}
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
