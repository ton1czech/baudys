'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface EverythingItemProps {
  title: string
  items: string[]
}

export const EverythingItem: FC<EverythingItemProps> = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
        {title}
      </h2>
      <ul className='flex flex-col space-y-1'>
        {items.map(item => (
          <li
            key={item}
            className='text-zinc-700 dark:text-zinc-300 lg:text-lg xl:text-xl'
          >
            ~ {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
