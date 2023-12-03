'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import Link from 'next/link'
import { FooterIcon } from './footer-icon'
import { Github, Instagram, Linkedin } from 'lucide-react'

export const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className='pt-32 pb-12 border-t dark:border-zinc-700/50 border-zinc-500/50'>
      <Container>
        <div className='flex justify-center gap-4 mb-20'>
          <FooterIcon
            name='github'
            icon={Github}
            href='https://www.github.com/ton1czech/'
          />
          <FooterIcon
            name='instagram'
            icon={Instagram}
            href='https://www.instagram.com/ton1czech/'
          />
          <FooterIcon
            name='linkedin'
            icon={Linkedin}
            href='https://www.linkedin.com/in/ton1czech/'
          />
        </div>

        <p className='mt-12 text-xs text-center text-light md:text-base sm:mt-4'>
          &copy;{new Date().getFullYear()}{' '}
          <Link href='<https://github.com/ton1czech>' className='underline'>
            Daniel Anthony Baudyš.
          </Link>
          {language === 'cs' && <> Všechna práva vyhrazena.</>}
          {language === 'en' && <> All rights reserved.</>}
        </p>
      </Container>
    </footer>
  )
}
