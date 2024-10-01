'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { MapPin } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import ShinyButton from '../ui/shiny-button'
import { RainbowButton } from '../ui/rainbow-button'

const images = [
  '/home/hero/developer.webp',
  '/home/hero/designer.webp',
  '/home/hero/programmer.webp',
  '/home/hero/photographer.webp',
]

const enWords = ['Developer', 'Designer', 'Programmer', 'Photographer']
const csWords = ['Vývojář', 'Designer', 'Programátor', 'Fotograf']

const colors = [
  'text-violet-600',
  'text-blue-600',
  'text-cyan-600',
  'text-red-600',
]

export const Hero = () => {
  const { language } = useLanguage()

  const [currentIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = useCallback(() => {
    const nextImageIndex = (currentIndex + 1) % images.length
    setCurrentImageIndex(nextImageIndex)
    setIsAnimating(true)
  }, [currentIndex, images.length, language])

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation()
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [isAnimating, startAnimation, language])

  return (
    <motion.section
      className='relative left-0 right-0 top-0 h-[90vh] overflow-hidden md:h-screen'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false)
        }}
      >
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, y: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          exit={{
            opacity: 0,
            y: -40,
            filter: 'blur(8px)',
            scale: 2,
            position: 'absolute',
          }}
          src={images[currentIndex]}
          alt='hero'
          className='absolute left-0 top-0 aspect-video h-full w-full object-cover'
        />
      </AnimatePresence>
      <div className='absolute inset-0 bg-black/50' />
      <div className='absolute inset-0 bg-gradient-to-t from-[#07001a] to-transparent' />

      <div className='absolute inset-0 h-full w-full'>
        <Container className='grid h-full w-full items-center justify-center'>
          <div className='text-center text-white'>
            <h4 className='-mb-2 text-center text-zinc-300/70 lg:text-lg xl:text-xl'>
              Daniel Anthony Baudyš
            </h4>
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0.2, y: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.5,
              }}
              exit={{
                opacity: 0.2,
                y: -40,
                filter: 'blur(8px)',
                scale: 5,
                position: 'absolute',
              }}
              className={cn(
                'mx-auto py-2 text-5xl font-black xl:text-6xl 2xl:text-7xl',
                colors[currentIndex],
              )}
            >
              {language === 'en' && enWords[currentIndex]}
              {language === 'cs' && csWords[currentIndex]}
            </motion.h1>

            <div className='mt-10 flex justify-center'>
              <Link href='/services'>
                <RainbowButton>
                  {language === 'en' && 'Let Me Help You'}
                  {language === 'cs' && 'Dovolte, Abych Vám Pomohl'}
                </RainbowButton>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </motion.section>
  )
}
