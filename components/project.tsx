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

  return (
    <Link
      href={href}
      onMouseEnter={() => {
        setIsHovering()
        setType('project')
      }}
      onMouseLeave={() => {
        setIsNotHovering()
        setType('')
      }}
      className='cursor-none'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <img src={image} alt={name} />

        <div className='mt-3 flex items-center justify-between'>
          <h3 className='italic text-zinc-300'>
            {name}{' '}
            <span className='text-sm font-light not-italic text-zinc-400'>
              | {year}
            </span>
          </h3>

          {language === 'cs' && (
            <div className='flex gap-3'>
              {servicesCs.map((service) => (
                <span
                  key={service}
                  className='rounded-md bg-violet-600/20 px-1 py-0.5 text-xs font-light text-zinc-200'
                >
                  {service}
                </span>
              ))}
            </div>
          )}
          {language === 'en' && (
            <div className='flex gap-3'>
              {servicesEn.map((service) => (
                <span
                  key={service}
                  className='rounded-md bg-violet-600/20 px-1 py-0.5 text-xs font-light text-zinc-200'
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
