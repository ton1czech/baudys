'use client'

import { cn } from '@/lib/utils'
import { FC } from 'react'
import { motion } from 'framer-motion'

interface ProcessItemProps {
  align: 'left' | 'right'
  img: string
  label: string
  body: string
}

export const ProcessItem: FC<ProcessItemProps> = ({
  align,
  img,
  label,
  body,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='grid reverse lg:grid-cols-2 gap-3 lg:gap-10'
    >
      <div
        className={cn(
          'relative overflow-hidden aspect-video',
          align === 'left' && 'lg:order-2',
          align === 'right' && 'lg:order-1'
        )}
      >
        <img src={img} alt={label} className='absolute object-cover' />
        <div className='w-full h-full bg-black/30 absolute' />
      </div>
      <div
        className={cn(
          'lg:grid lg:place-content-center',
          align === 'left' && 'lg:order-1',
          align === 'right' && 'lg:order-2'
        )}
      >
        <h2 className='text-xl md:text-2xl lg:text-3xl uppercase font-semibold mb-1 md:mb-2'>
          {label}
        </h2>
        <p className='text-zinc-700 dark:text-zinc-300 text-justify'>{body}</p>
      </div>
    </motion.div>
  )
}
