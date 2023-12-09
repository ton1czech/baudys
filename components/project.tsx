'use client'

import { useCursor } from '@/store/useCursor'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'

interface ProjectProps {
  name: string
  year: number
  image: string
  href: string
}

export const Project: FC<ProjectProps> = ({ name, year, image, href }) => {
  const { setIsHovering, setIsNotHovering, setType } = useCursor()

  const onMouseEnter = () => {
    setIsHovering()
    setType('project')
  }

  const onMouseLeave = () => {
    setIsNotHovering()
    setType('')
  }

  return (
    <Link href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <img src={image} alt={name} />

        <div className='flex justify-between'>
          <h3 className='font-semibold text-zinc-800 dark:text-zinc-200 text-lg'>
            {name}
          </h3>
          <p className='font-light text-zinc-600 dark:text-zinc-400 italic text-sm'>
            {year}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}
