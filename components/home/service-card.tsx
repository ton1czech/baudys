'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  body: string
  highlight?: boolean
  icon: LucideIcon
  image: string
  href: string
}

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  body,
  highlight,
  icon: Icon,
  image,
  href,
}) => {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h4
          className={cn(
            'mb-2 flex items-center justify-center gap-2 text-center text-lg font-semibold md:text-xl',
            highlight && 'gold-text',
          )}
        >
          <Icon size={23} className={cn(highlight && 'stroke-yellow-600')} />
          {title}
        </h4>

        <div className='relative aspect-video overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title}
            fill
            className='rounded-lg object-cover object-center transition duration-300 hover:scale-110'
          />
        </div>
        <p className='text-justify text-sm text-zinc-300'>{body}</p>
      </motion.div>
    </Link>
  )
}
