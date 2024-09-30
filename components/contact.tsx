'use client'

import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'
import { Container } from './container'
import { Title } from './title'
import { Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const Contact = () => {
  const { language } = useLanguage((state) => state)

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

      <div className='grid grid-cols-2 gap-10'>
        <div className='flex flex-col justify-between'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className='text-lg font-semibold md:text-xl'>
              Daniel Anthony Baudyš
            </h3>
            <p className='text-sm text-zinc-300'>Hájek 29</p>
            <p className='text-sm text-zinc-300'>345 06 Kdyně</p>
            <p className='mt-4 font-semibold'>
              {language === 'en' && 'Id No.: '}
              {language === 'cs' && 'IČO: '}
              199 333 12
            </p>
            <p className='text-sm text-zinc-300'>fyzická osoba</p>
            <p className='text-sm text-zinc-300'>neplátce DPH</p>
          </motion.div>

          <div className='space-y-1'>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='flex flex-nowrap items-center gap-2 text-center'
            >
              <Phone className='h-4 w-4' />
              <a
                href='tel:+420777530096'
                className='relative font-bold text-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0 after:z-10 after:h-[3px] after:w-full after:scale-x-0 after:rounded-lg after:bg-purple-500 after:opacity-0 after:transition after:hover:scale-x-100 after:hover:opacity-100'
              >
                +420 777 530 096
              </a>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='flex flex-nowrap items-center gap-2 text-center'
            >
              <Mail className='h-4 w-4' />
              <span
                onClick={() => {
                  setClicked(true)
                  navigator.clipboard.writeText('danielanthonybaudys@gmail.com')
                }}
                className='relative cursor-pointer font-bold text-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0 after:z-10 after:h-[3px] after:w-full after:scale-x-0 after:rounded-lg after:bg-purple-500 after:opacity-0 after:transition after:hover:scale-x-100 after:hover:opacity-100'
              >
                danielanthonybaudys@gmail.com
              </span>

              <motion.span
                className={cn(
                  'absolute mt-4 translate-x-[100px] translate-y-[25px] text-right text-zinc-800/70 opacity-0 transition',
                  clicked && 'opacity-100',
                )}
              >
                {language === 'en' && 'Copied'}
                {language === 'cs' && 'Zkopírováno'}
              </motion.span>
            </motion.p>
          </div>
        </div>

        <motion.img
          src='/contact/contact.webp'
          alt='contact me'
          className='mx-auto w-full rounded-2xl'
        />
      </div>
    </Container>
  )
}
