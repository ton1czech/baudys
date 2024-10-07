'use client'

import { NavItem } from './nav-item'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import LanguageSelector from './language-selector'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Menu } from 'lucide-react'
import { useLanguage } from '@/store/use-language'
import { AnimatePresence } from 'framer-motion'
import { MobileNavbar } from './mobile-navbar'
import { usePathname } from 'next/navigation'
import ShinyButton from '../ui/shiny-button'

export const Navbar = () => {
  const pathname = usePathname()
  const { language } = useLanguage()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTopOfTheScreen, setIsTopOfTheScreen] = useState<boolean>(true)
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
    } else {
      setIsServicesPage(false)
    }
  }, [pathname])

  return (
    <>
      <nav
        className={cn(
          'fixed left-0 right-0 top-5 z-50 mx-auto grid h-14 items-center rounded-xl px-4 transition lg:max-w-screen-lg 2xl:max-w-screen-xl',
        )}
      >
        <div
          className={cn(
            'flex h-full w-full items-center justify-between rounded-xl border border-transparent px-2',
            !isTopOfTheScreen &&
              'border-zinc-600/70 bg-zinc-800/40 shadow-xl backdrop-blur-lg',
          )}
        >
          <Link href='/' className='transition duration-300'>
            <img
              src='/logo.webp'
              alt='logo'
              className='h-12 w-12 transition hover:rotate-6 hover:scale-[103%]'
            />
          </Link>

          <div className='hidden items-center md:flex'>
            <div>
              <LanguageSelector />
            </div>

            <hr className='ml-6 mr-8 h-8 w-px bg-zinc-400/50' />

            {isServicesPage ? (
              <ul className='flex items-center gap-6'>
                <ArrowLeft
                  className='h-5 w-5 cursor-pointer text-zinc-400'
                  onClick={() => setIsServicesPage(false)}
                />
                <NavItem
                  label={language === 'en' ? 'Web Development' : 'Tvorba Webu'}
                  href='/services/web-development'
                />
                <NavItem
                  label={language === 'en' ? 'Photography' : 'Fotografování'}
                  href='/services/photography'
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
              <ul className='flex items-center gap-6'>
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
                <li>
                  <Link href='/contact'>
                    <ShinyButton className='flex items-center gap-1 text-base'>
                      {language === 'en' && <>Let&apos;s talk</>}
                      {language === 'cs' && <>Promluvme si</>}
                      <ArrowRight className='h-4 w-4' />
                    </ShinyButton>
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className='flex items-center md:hidden'>
            <div>
              <LanguageSelector />
            </div>
            <div>
              <Menu
                onClick={() => setIsOpen(true)}
                className='mx-2 cursor-pointer'
              />
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
