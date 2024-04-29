'use client'

import { useCursor } from '@/store/use-cursor'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/use-language'

interface ProjectProps {
  name: string
  year: number
  image: string
  href: string
  servicesEn: string[]
  servicesCs: string[]
}

export const Project: FC<ProjectProps> = ({
  name,
  year,
  image,
  href,
  servicesEn,
  servicesCs,
}) => {
  const { language } = useLanguage()
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

        <div className='flex justify-between items-center'>
          <h3 className='text-zinc-700 italic dark:text-zinc-300 mt-3'>
            {name}{' '}
            <span className='font-light text-sm not-italic text-zinc-600 dark:text-zinc-400'>
              | {year}
            </span>
          </h3>

          {language === 'cs' && (
            <div className='flex items-center gap-3'>
              {servicesCs.map(service => (
                <span
                  key={service}
                  className='text-xs bg-violet-600/20 px-1 py-0.5 rounded-md font-light text-zinc-200'
                >
                  {service}
                </span>
              ))}
            </div>
          )}
          {language === 'en' && (
            <div className='flex items-center gap-3'>
              {servicesEn.map(service => (
                <span
                  key={service}
                  className='text-xs bg-violet-600/20 px-1 py-0.5 rounded-md font-light text-zinc-200'
                >
                  {service}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
