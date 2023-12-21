'use client'

import { Container } from '@/components/container'
import { motion } from 'framer-motion'

export const Intro = () => {
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
        className='w-full rounded-lg'
      >
        <source src='https://i.imgur.com/LHDtFdI.mp4' />
      </motion.video>
    </Container>
  )
}
