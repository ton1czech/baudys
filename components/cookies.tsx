'use client'

import { useCookies } from '@/store/use-cookies'
import { useLanguage } from '@/store/use-language'
import { Button } from './ui/button'
import { useEffect } from 'react'
import { Container } from './container'
import { AnimatePresence, motion } from 'framer-motion'

export const Cookies = () => {
  const { language } = useLanguage()
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
          className='fixed bottom-0 left-0 z-[999] w-screen origin-bottom bg-violet-800'
        >
          <Container className='relative flex flex-col gap-8 py-4 lg:py-12'>
            <h3 className='text-zinc-200'>
              {language === 'cs' &&
                'Cookies používám pouze pro analytické účely a pro ukládání zvoleného jazyka do prohlížeče.'}
              {language === 'en' &&
                'I only use cookies for analytical purposes and to store the selected language in the browser.'}
            </h3>
            <div className='flex flex-col gap-4 md:flex-row'>
              <Button
                onClick={() => {
                  setCookiesEnabled()
                  closeCookiesPermanently()
                }}
                className='w-full rounded-2xl bg-white py-6 text-lg font-bold text-black hover:bg-zinc-100'
              >
                {language === 'cs' && 'Souhlasím'}
                {language === 'en' && 'Agree'}
              </Button>
              <Button
                onClick={closeCookiesPermanently}
                className='w-full rounded-2xl bg-white py-6 text-lg font-bold text-black hover:bg-zinc-100'
              >
                {language === 'cs' && 'Nesouhlasím'}
                {language === 'en' && 'Disagree'}
              </Button>
              <Button
                onClick={closeCookies}
                className='w-full rounded-2xl bg-white py-6 text-lg font-bold text-black hover:bg-zinc-100'
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
