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
      className='reverse grid gap-3 lg:grid-cols-2 lg:gap-10'
    >
      <div
        className={cn(
          'relative aspect-video overflow-hidden rounded-lg',
          align === 'left' && 'lg:order-2',
          align === 'right' && 'lg:order-1',
        )}
      >
        <img
          src={img}
          alt={label}
          className='absolute bottom-0 rounded-lg object-cover'
        />
        <div className='absolute h-full w-full bg-black/30' />
      </div>
      <div
        className={cn(
          'lg:grid lg:place-content-center',
          align === 'left' && 'lg:order-1',
          align === 'right' && 'lg:order-2',
        )}
      >
        <h2 className='mb-1 text-xl font-semibold uppercase md:mb-2 md:text-2xl lg:text-3xl'>
          {label}
        </h2>
        <p className='text-justify text-zinc-300'>{body}</p>
      </div>
    </motion.div>
  )
}
