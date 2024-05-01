'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { FooterIcon } from './footer-icon'
import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className='pt-8 lg:pt-12 pb-12 border-t dark:border-zinc-700/50 border-zinc-500/50'>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='flex justify-center mb-40'
        >
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
            className='flex items-center gap-1 colorful-text text-sm font-semibold relative after:w-full after:h-[3px] after:bg-purple-500 after:-bottom-1 after:left-0 after:right-0 after:z-10 after:absolute after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:rounded-lg'
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
          className='flex justify-center gap-4 mb-14'
        >
          <div>
            <FooterIcon
              name='github'
              icon={Github}
              href='https://www.github.com/ton1czech/'
            />
          </div>
          <div>
            <FooterIcon
              name='linkedin'
              icon={Linkedin}
              href='https://www.linkedin.com/in/ton1czech/'
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-center text-sm'
        >
          {language === 'en' && 'Id No.: '}
          {language === 'cs' && 'IČO: '}
          19933312
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mt-12 text-xs text-center text-light md:text-base sm:mt-4'
        >
          &copy;{new Date().getFullYear()} Daniel Anthony Baudyš.
          {language === 'cs' && <> Všechna práva vyhrazena.</>}
          {language === 'en' && <> All rights reserved.</>}
        </motion.p>
      </Container>
    </footer>
  )
}
