'use client'

import { NavItem } from './nav-item'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import LanguageSelector from './language-selector'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'

export const Navbar = () => {
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
        'fixed top-5 py-2 px-2 left-1/2 -translate-x-1/2 border border-transparent rounded-xl w-full mx-auto 2xl:max-w-screen-xl lg:max-w-screen-lg transition',
        !isTopOfTheScreen &&
          'bg-zinc-300/20 border-zinc-400/70 backdrop-blur-lg dark:bg-zinc-800/20 dark:border-zinc-600/70'
      )}
    >
      <div className='flex justify-between items-center'>
        <div className='font-bold text-2xl'>LOGO</div>

        <div>
          <ModeToggle />
          <LanguageSelector />
        </div>

        <ul className='flex gap-6 items-center'>
          <NavItem label='Home' href='/' />
          <NavItem label='About' href='/about' />
          <NavItem label='Services' href='/services' />
          <NavItem label='Projects' href='/projects' />
          <li>
            <Button className='rounded-lg'>
              <Link href='/contact'>Let&apos;s talk!</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
