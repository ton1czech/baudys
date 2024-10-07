'use client'

import { useLanguage } from '@/store/use-language'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const images = [
  '/gallery/alpina-d3/10.webp',
  '/gallery/peter/1.webp',
  '/gallery/bmw-f30/1.webp',
  '/gallery/toyota-paseo/5.webp',
  '/gallery/strongman-2/1.webp',
  '/gallery/ryzmberk/2.webp',
  '/gallery/bmw-g80/4.webp',
  '/gallery/strongman-2/4.webp',
  '/gallery/mazda-mx3/1.webp',
  '/gallery/strongman-2/2.webp',
  '/gallery/mazda-mx3/4.webp',
  '/gallery/peter/4.webp',
  '/gallery/ryzmberk/5.webp',
  '/gallery/toyota-paseo/2.webp',
  '/gallery/peter/2.webp',
  '/gallery/strongman-2/5.webp',
  '/gallery/bmw-f30/3.webp',
  '/gallery/bmw-g80/3.webp',
  '/gallery/toyota-paseo/4.webp',
  '/gallery/ryzmberk/6.webp',
]

export const Hero = () => {
  const { language } = useLanguage()

  const [isTopOfTheScreen, setIsTopOfTheScreen] = useState<boolean>(false)
  const [currentIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = useCallback(() => {
    const nextImageIndex = (currentIndex + 1) % images.length
    setCurrentImageIndex(nextImageIndex)
    setIsAnimating(true)
  }, [currentIndex, images.length, language])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 300) {
        setIsTopOfTheScreen(true)
      }
      if (window.scrollY >= 300) setIsTopOfTheScreen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation()
      }, 800)
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
          className='absolute left-0 top-0 h-full w-full object-contain'
        />
      </AnimatePresence>
      <div className='absolute inset-0 bg-gradient-to-t from-[#07001a] to-transparent to-20%' />
      <div className='absolute inset-0 bg-gradient-to-b from-[#07001a] to-transparent to-20%' />

      {isTopOfTheScreen && (
        <div className='absolute bottom-4 w-full transition duration-300'>
          <p className='flex items-center justify-center gap-1 text-center text-muted-foreground'>
            {language === 'en' && 'Scroll down'}
            {language === 'cs' && 'Jeď dolů'}
            <ArrowDown size={20} className='animate-bounce' />
          </p>
        </div>
      )}
    </motion.section>
  )
}
