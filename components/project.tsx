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
  descriptionEn: string
  descriptionCs: string
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

        <h3 className='text-zinc-600 italic dark:text-zinc-400 mt-3'>
          {name} <span className='font-light text-sm not-italic'>| {year}</span>
        </h3>
      </motion.div>
    </Link>
  )
}
