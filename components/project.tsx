'use client'

import { useCursor } from '@/store/useCursor'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/useLanguage'

interface ProjectProps {
  name: string
  year: number
  image: string
  href: string
  descriptionEn: string
  descriptionCs: string
}

export const Project: FC<ProjectProps> = ({
  name,
  year,
  image,
  href,
  descriptionEn,
  descriptionCs,
}) => {
  const { setIsHovering, setIsNotHovering, setType } = useCursor()
  const { language } = useLanguage()

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

        <div className='flex justify-between items-center mt-3'>
          <p className='font-semibold text-zinc-800 dark:text-zinc-200 text-xl md:text-2xl'>
            {language === 'en' && <>{descriptionEn}</>}
            {language === 'cs' && <>{descriptionCs}</>}
          </p>
          <h3 className='text-zinc-600 italic dark:text-zinc-400'>
            {name}{' '}
            <span className='font-light text-sm not-italic'>| {year}</span>
          </h3>
        </div>
      </motion.div>
    </Link>
  )
}
