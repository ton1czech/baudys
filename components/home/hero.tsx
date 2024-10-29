'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <motion.section
      className='relative left-0 right-0 top-0 h-[90vh] overflow-hidden md:h-screen'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='absolute inset-0 bg-gradient-to-t from-[#07001a] to-transparent' />

      <div className='absolute inset-0 h-full w-full'>
        <Container className='grid h-full w-full items-center justify-center'>
          <div className='text-center text-white'>
            <h4 className='-mb-2 text-center text-zinc-300/70 lg:text-lg xl:text-xl'>
              Daniel Anthony Baudyš
            </h4>
          </div>
        </Container>
      </div>
    </motion.section>
  )
}
