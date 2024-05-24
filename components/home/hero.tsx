'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import Typewriter from 'typewriter-effect'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { ButtonGradient } from '../ui/button-gradient'
import Link from 'next/link'
import { BackgroundBeams } from '../ui/background-beams'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <motion.div
      className='overflow-x-hidden relative pb-40 lg:pb-60 xl:pb-80'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <BackgroundBeams />
      <Container>
        <div className='relative h-[80vh] w-full mt-28 lg:mt-32'>
          <div className='flex justify-center flex-col w-full h-full p-4'>
            <h4 className='md:text-lg lg:text-xl xl:text-2xl text-zinc-500 -mb-2 relative z-10 text-center'>
              Daniel Anthony Baudyš
            </h4>
            <h1 className='text-5xl xl:text-6xl 2xl:text-7xl font-black colorful-text py-2 text-center relative z-10'>
              <Typewriter
                options={{
                  strings:
                    language === 'en'
                      ? ['Developer', 'Designer', 'Programmer', 'Photographer']
                      : ['Vývojář', 'Designer', 'Programátor', 'Fotograf'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='flex justify-center'>
              <div className='flex items-center bg-zinc-800/70 px-4 py-2 border border-zinc-600 rounded-lg gap-2 mt-2 relative z-10 w-full justify-center sm:w-auto text-zinc-400'>
                <MapPin size={22} />
                {language === 'en' && 'based in Czech Republic'}
                {language === 'cs' && 'se sídlem v České republice'}
                <img
                  src='/flags/cs.webp'
                  alt='czech republic flag'
                  className='w-5'
                />
              </div>
            </div>
            {language === 'en' && (
              <p className='max-w-[52ch] mt-12 text-zinc-400 text-justify relative mx-auto'>
                I am committed to taking you into the digital universe where you
                will encounter excellence and design combined in a unique
                harmony.
              </p>
            )}
            {language === 'cs' && (
              <p className='max-w-[50ch] mt-12 text-zinc-400 text-justify relative mx-auto'>
                Jsem odhodlaný zavést vás do digitálního vesmíru, kde se setkáte
                s excelencí a designem spojeným v jedinečné harmonii.
              </p>
            )}
            <div className='flex justify-center mt-28'>
              <Link href='/services'>
                <ButtonGradient className='py-2 px-6 font-semibold text-lg'>
                  {language === 'en' && 'Take Action!'}
                  {language === 'cs' && 'Jednej!'}
                </ButtonGradient>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}