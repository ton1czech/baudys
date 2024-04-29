'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  body: string
  highlight?: boolean
  icon: LucideIcon
}

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  body,
  highlight,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='w-full p-8 relative border border-transparent'
    >
      <h4
        className={cn(
          'text-center font-semibold mb-2 text-lg md:text-xl flex items-center gap-4',
          highlight && 'gold-text'
        )}
      >
        <Icon className={cn('w-7 h-7', highlight && 'stroke-yellow-600')} />
        {title}
      </h4>
      <p className='text-justify text-zinc-800 dark:text-zinc-300'>{body}</p>
    </motion.div>
  )
}
