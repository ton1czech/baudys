'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  body: string
  highlight?: boolean
  icon: LucideIcon
  image: string
}

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  body,
  highlight,
  icon: Icon,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h4
        className={cn(
          'text-center font-semibold mb-2 text-lg md:text-xl flex items-center justify-center gap-2',
          highlight && 'gold-text'
        )}
      >
        <Icon size={23} className={cn(highlight && 'stroke-yellow-600')} />
        {title}
      </h4>

      <div className='rounded-lg aspect-video relative overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='rounded-lg object-cover object-center'
        />
      </div>
      <p className='text-justify text-zinc-800 dark:text-zinc-300 text-sm'>
        {body}
      </p>
    </motion.div>
  )
}
