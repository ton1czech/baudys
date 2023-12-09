'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface TitleProps {
  label: string
}

export const Title: FC<TitleProps> = ({ label }) => {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 xl:mb-10 uppercase py-2'
    >
      {label}
    </motion.h3>
  )
}
