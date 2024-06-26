'use client'

import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'
import { Container } from './container'
import { Title } from './title'
import { Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const Contact = () => {
  const { language } = useLanguage(state => state)

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      setClicked(false)
    }, 3000)

    return () => clearTimeout(delay)
  }, [clicked])

  return (
    <Container>
      <Title
        label={language === 'en' ? "let's work together" : 'spolupracujme'}
      />

      <motion.img
        src='/contact/contact.webp'
        alt='contact me'
        className='w-full max-w-[70ch] mx-auto rounded-2xl mb-10'
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex gap-2 items-center flex-nowrap md:text-lg text-center mx-auto justify-center'
      >
        <Mail className='w-4 h-4' />
        <span
          onClick={() => {
            setClicked(true)
            navigator.clipboard.writeText('danielanthonybaudys@gmail.com')
          }}
          className='font-bold text-purple-500 after:w-full after:h-[3px] after:bg-purple-500 after:-bottom-1 after:left-0 after:right-0 after:z-10 after:absolute relative after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:rounded-lg cursor-pointer'
        >
          danielanthonybaudys@gmail.com
        </span>

        <motion.span
          className={cn(
            'mt-4 text-right opacity-0 transition text-zinc-800/70 absolute translate-y-[25px] translate-x-[100px]',
            clicked && 'opacity-100'
          )}
        >
          {language === 'en' && 'Copied'}
          {language === 'cs' && 'Zkopírováno'}
        </motion.span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex items-center gap-2 my-4 md:my-6 lg:my-8 xl:my-10 max-w-[70ch] mx-auto'
      >
        <span className='w-full h-px bg-muted-foreground/60 dark:bg-muted-foreground/30' />
        <p className='text-muted-foreground'>
          {language === 'en' && 'OR'}
          {language === 'cs' && 'NEBO'}
        </p>
        <span className='w-full h-px bg-muted-foreground/60 dark:bg-muted-foreground/30' />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex gap-2 items-center flex-nowrap md:text-lg text-center mx-auto justify-center'
      >
        <Phone className='w-4 h-4' />
        <a
          href='tel:+420777530096'
          className='font-bold text-purple-500 after:w-full after:h-[3px] after:bg-purple-500 after:-bottom-1 after:left-0 after:right-0 after:z-10 after:absolute relative after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:rounded-lg'
        >
          +420 777 530 096
        </a>
      </motion.p>
    </Container>
  )
}
