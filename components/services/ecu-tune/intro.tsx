'use client'

import { Container } from '@/components/container'
import { motion } from 'framer-motion'

export const Intro = () => {
  return (
    <Container>
      <motion.video
        autoPlay
        playsInline
        muted
        loop
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='w-full rounded-lg'
      >
        <source src='https://i.imgur.com/LHDtFdI.mp4' />
      </motion.video>
    </Container>
  )
}
