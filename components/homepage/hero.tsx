'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/useLanguage'
import Typewriter from 'typewriter-effect'
import { Mist } from '../mist'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <motion.div
      className='relative'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Mist />
      <Container className='min-h-screen grid place-content-center mb-6 lg:mb-10'>
        <div>
          <h4 className='font-semibold md:text-lg lg:text-xl xl:text-2xl text-zinc-600 -mb-2 relative z-10 text-center 2xl:text-left'>
            {language === 'en' && <>Hey, my name is Daniel.</>}
            {language === 'cs' && <>Ahoj, jmenuji se Daniel.</>}
          </h4>

          <h1 className='text-5xl xl:text-6xl 2xl:text-7xl font-black colorful-text py-2 text-center relative z-10'>
            <Typewriter
              options={{
                strings:
                  language === 'en'
                    ? ['Developer', 'Designer']
                    : ['Vývojář', 'Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className='flex justify-center 2xl:justify-end'>
            <div className='flex items-center bg-zinc-100/70 dark:bg-zinc-800/70 px-4 py-2 border border-zinc-500 dark:border-zinc-600 rounded-lg gap-2 mt-2 relative z-10 w-full justify-center sm:w-auto'>
              <MapPin />
              {language === 'en' && 'based in Czech Republic 🇨🇿'}
              {language === 'cs' && 'se sídlem v České republice 🇨🇿'}
            </div>
          </div>

          {language === 'en' && (
            <p className='max-w-[75ch] mt-20 dark:text-zinc-400 text-zinc-700 text-justify relative z-10'>
              I am committed to taking you into the digital universe where you
              will encounter excellence and design combined in a unique harmony.
              My mission is to create beautiful and user-friendly environments.
              I love to go beyond the usual boundaries to make your online
              presence shine.
            </p>
          )}
          {language === 'cs' && (
            <p className='max-w-[62ch] mt-20 dark:text-zinc-400 text-zinc-700 text-justify relative z-10'>
              Jsem odhodlaný zavést vás do digitálního vesmíru, kde se setkáte s
              excelencí a designem spojeným v jedinečné harmonii. Má mise
              spočívá v tvoření krásných a uživatelsky přívětivých prostředí.
              Rád překračuji obvyklé hranice, aby vaše online přítomnost mohla
              zázářit.
            </p>
          )}
        </div>
      </Container>
    </motion.div>
  )
}
