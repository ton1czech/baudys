'use client'

import { NavItem } from './nav-item'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import LanguageSelector from './language-selector'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Menu } from 'lucide-react'
import { useLanguage } from '@/store/use-language'
import { AnimatePresence } from 'framer-motion'
import { MobileNavbar } from './mobile-navbar'
import { useCursor } from '@/store/use-cursor'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTopOfTheScreen, setIsTopOfTheScreen] = useState<boolean>(false)
  const [isServicesPage, setIsServicesPage] = useState<boolean>(false)

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

  useEffect(() => {
    if (pathname.startsWith('/services')) {
      setIsServicesPage(true)
    }
  }, [pathname])

  useEffect(() => {
    if (!pathname.startsWith('/services')) {
      setIsServicesPage(false)
    }
  }, [pathname])

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
            className='transition duration-300'
            onMouseEnter={setIsHovering}
            onMouseLeave={setIsNotHovering}
          >
            <img
              src='/logo.webp'
              alt='logo'
              className='w-12 h-12 hover:scale-[103%] hover:rotate-6 transition'
            />
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

            {isServicesPage ? (
              <ul className='flex gap-6 items-center'>
                <ArrowLeft
                  className='text-zinc-600 dark:text-zinc-400 w-5 h-5'
                  onMouseEnter={setIsHovering}
                  onMouseLeave={setIsNotHovering}
                  onClick={() => setIsServicesPage(false)}
                />
                <NavItem
                  label={language === 'en' ? 'Web Development' : 'Tvorba Webu'}
                  href='/services/web-development'
                />
                <NavItem
                  label={language === 'en' ? 'ECU Tune' : 'Ladění ECU'}
                  href='/services/ecu-tune'
                />
                <NavItem
                  label={language === 'en' ? 'TPMS' : 'TPMS'}
                  href='/services/tpms'
                />
              </ul>
            ) : (
              <ul className='flex gap-6 items-center'>
                <NavItem
                  label={language === 'en' ? 'Services' : 'Služby'}
                  href='/services'
                />
                <NavItem
                  label={language === 'en' ? 'Projects' : 'Projekty'}
                  href='/projects'
                />
                <NavItem
                  label={language === 'en' ? 'Gallery' : 'Galerie'}
                  href='/gallery'
                />
                <li
                  onMouseEnter={setIsHovering}
                  onMouseLeave={setIsNotHovering}
                >
                  <Button variant='rainbow' className=''>
                    <Link href='/contact' className='flex gap-1 items-center'>
                      {language === 'en' && <>Let&apos;s talk</>}
                      {language === 'cs' && <>Promluvme si</>}

                      <ArrowRight className='w-4 h-4' />
                    </Link>
                  </Button>
                </li>
              </ul>
            )}
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
