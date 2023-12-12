'use client'

import { NavItem } from './nav-item'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import LanguageSelector from './language-selector'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { useLanguage } from '@/store/useLanguage'
import { AnimatePresence } from 'framer-motion'
import { MobileNavbar } from './mobile-navbar'
import { useCursor } from '@/store/useCursor'

export const Navbar = () => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTopOfTheScreen, setIsTopOfTheScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfTheScreen(true)
      }
      if (window.scrollY !== 0) setIsTopOfTheScreen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-5 px-4 left-0 right-0 h-14 rounded-xl 2xl:max-w-screen-xl lg:max-w-screen-lg transition grid items-center z-50 mx-auto'
        )}
      >
        <div
          className={cn(
            'flex justify-between items-center px-2 rounded-xl border border-transparent h-full w-full',
            !isTopOfTheScreen &&
              'bg-zinc-300/40 border-zinc-400/70 backdrop-blur-lg dark:bg-zinc-800/40 dark:border-zinc-600/70 shadow-xl'
          )}
        >
          <Link
            href='/'
            className='font-bold text-2xl hover:text-purple-500 transition duration-300'
            onMouseEnter={setIsHovering}
            onMouseLeave={setIsNotHovering}
          >
            <img src='/logo.webp' alt='logo' className='w-12 h-12' />
          </Link>

          <div className='items-center hidden md:flex'>
            <div className='flex gap-2 items-center'>
              <div onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
                <ModeToggle />
              </div>
              <div onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
                <LanguageSelector />
              </div>
            </div>

            <hr className='w-px h-8 bg-zinc-600/50 dark:bg-zinc-400/50 ml-6 mr-8' />

            <ul className='flex gap-6 items-center'>
              <NavItem
                label={language === 'en' ? 'Services' : 'Služby'}
                href='/services'
              />
              <NavItem
                label={language === 'en' ? 'Projects' : 'Projekty'}
                href='/projects'
              />
              <li onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
                <Button variant='rainbow' className=''>
                  <Link href='/contact' className='flex gap-1 items-center'>
                    {language === 'en' && <>Let&apos;s talk</>}
                    {language === 'cs' && <>Promluvme si</>}

                    <ArrowRight className='w-4 h-4' />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>

          <div className='flex items-center md:hidden'>
            <div onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
              <ModeToggle />
            </div>
            <div onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
              <LanguageSelector />
            </div>
            <div onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
              <Menu onClick={() => setIsOpen(true)} className='mx-2' />
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && <MobileNavbar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  )
}
