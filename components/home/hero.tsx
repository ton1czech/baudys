'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { ButtonGradient } from '../ui/button-gradient'
import Link from 'next/link'
import { BackgroundBeams } from '../ui/background-beams'
import { FlipWords } from '../ui/flip-words'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <motion.div
      className='overflow-x-hidden pb-40 lg:pb-60 xl:pb-80'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <BackgroundBeams />
      <Container>
        <div className='mt-28 h-[80vh] w-full lg:mt-32'>
          <div className='flex h-full w-full flex-col justify-center p-4'>
            <h4 className='-mb-2 text-center text-zinc-500 md:text-lg lg:text-xl xl:text-2xl'>
              Daniel Anthony Baudyš
            </h4>
            <div className='flex justify-center'>
              <h1 className='py-2 text-5xl font-black text-violet-600 xl:text-6xl 2xl:text-7xl'>
                {language === 'en' && (
                  <FlipWords
                    words={[
                      'Developer',
                      'Designer',
                      'Programmer',
                      'Photographer',
                    ]}
                  />
                )}
                {language === 'cs' && (
                  <FlipWords
                    words={['Vývojář', 'Designer', 'Programátor', 'Fotograf']}
                  />
                )}
              </h1>
            </div>
            <div className='flex justify-center'>
              <div className='mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-600 bg-zinc-800/70 px-4 py-2 text-zinc-400 sm:w-auto'>
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
              <p className='mx-auto mt-12 max-w-[52ch] text-justify text-zinc-400'>
                I am committed to taking you into the digital universe where you
                will encounter excellence and design combined in a unique
                harmony.
              </p>
            )}
            {language === 'cs' && (
              <p className='mx-auto mt-12 max-w-[50ch] text-justify text-zinc-400'>
                Jsem odhodlaný zavést vás do digitálního vesmíru, kde se setkáte
                s excelencí a designem spojeným v jedinečné harmonii.
              </p>
            )}
            <div className='mt-28 flex justify-center'>
              <Link href='/services'>
                <ButtonGradient className='bg-zinc-900 px-6 py-2 text-lg font-semibold text-white'>
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
