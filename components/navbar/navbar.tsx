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

export const Navbar = () => {
  const { language } = useLanguage()

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
    <nav
      className={cn(
        'fixed top-5 px-4 left-0 right-0 h-14 rounded-xl 2xl:max-w-screen-xl lg:max-w-screen-lg transition grid items-center z-[9999] mx-auto'
      )}
    >
      <div
        className={cn(
          'flex justify-between items-center px-2 rounded-xl border border-transparent h-full w-full',
          !isTopOfTheScreen &&
            'bg-zinc-300/20 border-zinc-400/70 backdrop-blur-lg dark:bg-zinc-800/20 dark:border-zinc-600/70 shadow-xl'
        )}
      >
        <Link href='/' className='font-bold text-2xl'>
          LOGO
        </Link>

        <div className='items-center hidden md:flex'>
          <div className='flex items-center'>
            <ModeToggle />
            <LanguageSelector />
          </div>

          <hr className='w-px h-8 bg-zinc-600/50 dark:bg-zinc-400/50 mx-16' />

          <ul className='flex gap-6 items-center'>
            <NavItem
              label={language === 'en' ? 'Services' : 'Služby'}
              href='/services'
            />
            <NavItem
              label={language === 'en' ? 'Projects' : 'Projekty'}
              href='/projects'
            />
            <li>
              <Button className='rounded-lg bg-gradient-to-br from-sky-600 via-indigo-700 to-purple-500 text-zinc-50 transition hover:shadow-[0_0_20px_5px_rgba(168,85,247,1)] dark:hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.5)]'>
                <Link
                  href='/contact'
                  className='font-bold text-base flex gap-1 items-center'
                >
                  {language === 'en' && <>Let&apos;s talk</>}
                  {language === 'cs' && <>Promluvme si</>}

                  <ArrowRight className='w-4 h-4' />
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className='flex items-center md:hidden'>
          <ModeToggle />
          <LanguageSelector />
          <Menu
            onClick={() => setIsOpen(true)}
            className='cursor-pointer mx-2'
          />

          <AnimatePresence>
            {isOpen && <MobileNavbar setIsOpen={setIsOpen} />}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}
