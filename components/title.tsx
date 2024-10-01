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
      className='mb-6 py-2 text-3xl font-bold uppercase md:text-4xl lg:text-5xl xl:text-6xl'
    >
      {label}
    </motion.h3>
  )
}
