'use client'

import { Container } from '../container'
import { motion } from 'framer-motion'
import { Logos } from './logos'

const Companies = () => {
  return (
    <div className='relative z-10 py-8 overflow-hidden lg:py-16 bg-zinc-300'>
      <Container>
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='z-10 py-2 text-lg font-semibold tracking-wider text-center uppercase text-zinc-600/80 xl:text-4xl'
        >
          Prodáváme výrobky těchto značek
        </motion.h1>
      </Container>
      <Logos />
    </div>
  )
}

export default Companies
