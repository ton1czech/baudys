'use client'

import { FC } from 'react'
import { Button } from '../ui/button'
import { useCursor } from '@/store/useCursor'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceProps {
  img: string
  label: string
  body: string
  href: string
}

export const Service: FC<ServiceProps> = ({ img, label, body, href }) => {
  const { setIsHovering, setIsNotHovering } = useCursor()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='group'
    >
      <Link
        href={href}
        onMouseEnter={setIsHovering}
        onMouseLeave={setIsNotHovering}
        className='grid lg:grid-cols-2 gap-4 lg:gap-10'
      >
        <div className='rounded-lg aspect-video relative w-full h-full overflow-hidden'>
          <Image
            src={img}
            alt={label}
            fill
            className='rounded-lg group-hover:scale-105 transition duration-300 object-cover object-center'
          />
        </div>

        <div className='grid place-content-center'>
          <h3 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-1'>
            {label}
          </h3>
          <p className='text-justify text-zinc-700 dark:text-zinc-400 mb-6'>
            {body}
          </p>
          <Button variant='rainbow'>Learn More</Button>
        </div>
      </Link>
    </motion.div>
  )
}
