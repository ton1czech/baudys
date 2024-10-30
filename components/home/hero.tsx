'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { MapPin } from 'lucide-react'
import Clock from 'react-live-clock'
import { motion } from 'framer-motion'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <section>
      <Container className='flex flex-col items-center'>
        <div className='rounded-xl border border-zinc-200/10 bg-zinc-800/80'>
          <div className='grid sm:grid-cols-2'>
            <div className='relative'>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                src='/home/hero.webp'
                alt='me'
                className='rounded-t-xl sm:rounded-l-xl sm:rounded-r-none'
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='absolute left-2 top-2 rounded-xl border-zinc-200/10 bg-zinc-800/80 p-2 px-3 text-sm md:text-base'
              >
                {language === 'cs' && 'Ahoj, já jsem Daniel'}
                {language === 'en' && "Hi, I'm Daniel"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='absolute bottom-2 right-2 flex items-center gap-2 rounded-xl border border-zinc-200/10 bg-zinc-800/80 p-2 text-xs sm:text-sm md:text-base'
              >
                <div className='flex items-center gap-1'>
                  <MapPin className='size-5' />
                  {language === 'cs' && 'Plzeňský kraj, Česká republika'}
                  {language === 'en' && 'Pilsen region, Czech republic'}
                </div>
                <span>
                  (
                  <Clock
                    format={'HH:mm:ss'}
                    ticking={true}
                    timezone={'Europe/Prague'}
                  />
                  )
                </span>
              </motion.div>
            </div>

            <div className='flex flex-col p-4'>
              <div className='space-y-1 text-2xl font-bold md:space-y-2 md:text-3xl lg:text-5xl 2xl:text-6xl'>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='flex items-center justify-between gap-4 text-fuchsia-200'
                >
                  {language === 'cs' && 'Vývojář'}
                  {language === 'en' && 'Developer'}
                  <span className='rounded-md border border-zinc-200/10 bg-fuchsia-500/20 p-1 text-sm text-fuchsia-500 md:p-2 md:text-base'>
                    5 {language === 'cs' && 'let'}
                    {language === 'en' && 'years'}
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='flex items-center justify-between gap-4 text-green-200'
                >
                  {language === 'cs' && 'Fotograf'}
                  {language === 'en' && 'Photographer'}
                  <span className='rounded-md border border-zinc-200/10 bg-green-500/20 p-1 text-sm text-green-500 md:p-2 md:text-base'>
                    9 {language === 'cs' && 'let'}
                    {language === 'en' && 'years'}
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='flex items-center justify-between gap-4 text-sky-200'
                >
                  {language === 'cs' && 'Designér'}
                  {language === 'en' && 'Designer'}
                  <span className='rounded-md border border-zinc-200/10 bg-sky-500/20 p-1 text-sm text-sky-500 md:p-2 md:text-base'>
                    3 {language === 'cs' && 'roky'}
                    {language === 'en' && 'years'}
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='flex items-center justify-between gap-4 text-yellow-200'
                >
                  {language === 'cs' && 'Tvůrce'}
                  {language === 'en' && 'Creator'}
                  <span className='rounded-md border border-zinc-200/10 bg-yellow-500/20 p-1 text-sm text-yellow-500 md:p-2 md:text-base'>
                    2 {language === 'cs' && 'roky'}
                    {language === 'en' && 'years'}
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='flex items-center justify-between gap-4 text-indigo-200'
                >
                  {language === 'cs' && 'Programátor'}
                  {language === 'en' && 'Programmer'}
                  <span className='rounded-md border border-zinc-200/10 bg-indigo-500/20 p-1 text-sm text-indigo-500 md:p-2 md:text-base'>
                    4 {language === 'cs' && 'roky'}
                    {language === 'en' && 'years'}
                  </span>
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mt-4 text-justify md:text-lg xl:text-2xl'
        >
          Pomáhám projektům ožít s jasnou vizí, funkčností a stylem. Mým cílem
          je propojit
          <span className='text-sky-500'> krásu</span>,{' '}
          <span className='text-fuchsia-500'>účel</span> a
          <span className='text-green-500'> efektivitu </span>
          ve všech digitálních zážitcích.
        </motion.p>
      </Container>
    </section>
  )
}
