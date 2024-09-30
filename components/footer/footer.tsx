'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { FooterIcon } from './footer-icon'
import { ArrowUp, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaTiktok } from 'react-icons/fa6'

export const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className='border-t border-zinc-700/50 pb-12 pt-8 lg:pt-12'>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-40 flex justify-center'
        >
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
            className='colorful-text relative flex items-center gap-1 text-sm font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:z-10 after:h-[3px] after:w-full after:scale-x-0 after:rounded-lg after:bg-purple-500 after:opacity-0 after:transition after:hover:scale-x-100 after:hover:opacity-100'
          >
            {language === 'en' && 'Back to top'}
            {language === 'cs' && 'Zpět na začátek'}
            <ArrowUp className='h-4 w-4 text-sky-500' />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-14 flex justify-center gap-4'
        >
          <FooterIcon
            name='instagram'
            icon={Instagram}
            href='https://www.instagram.com/baudys.me/'
          />
          <FooterIcon
            name='tiktok'
            icon={FaTiktok}
            href='https://www.tiktok.com/@baudys.cars'
          />
          <FooterIcon
            name='youtube'
            icon={Youtube}
            href='https://www.youtube.com/channel/UCblA_CnykG2Dw_6IMwZ9z9A'
          />
          <FooterIcon
            name='linkedin'
            icon={Linkedin}
            href='https://www.linkedin.com/in/ton1czech/'
          />
          <FooterIcon
            name='github'
            icon={Github}
            href='https://www.github.com/ton1czech/'
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-light mt-12 text-center text-xs sm:mt-4 md:text-base'
        >
          &copy;{new Date().getFullYear()} Daniel Anthony Baudyš.
          {language === 'cs' && <> Všechna práva vyhrazena.</>}
          {language === 'en' && <> All rights reserved.</>}
        </motion.p>
      </Container>
    </footer>
  )
}
