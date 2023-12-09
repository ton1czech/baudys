'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

export const Intro = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <motion.video
        autoPlay
        playsInline
        muted
        loop
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <source src='https://cdn.coverr.co/videos/coverr-the-rear-of-a-bmw-m4-7342/1080p.mp4' />
      </motion.video>
    </Container>
  )
}
