'use client'

import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { Cursor } from './cursor'

interface ProjectProps {
  name: string
  year: number
  image: string
  href: string
}

export const Project: FC<ProjectProps> = ({ name, year, image, href }) => {
  return (
    <Cursor type='project'>
      <Link href={href} className='cursor-none'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={image} alt={name} />

          <div className='mt-3 flex items-center justify-between'>
            <h3 className='italic'>
              {name}{' '}
              <span className='text-sm font-light not-italic text-muted-foreground'>
                | {year}
              </span>
            </h3>
          </div>
        </motion.div>
      </Link>
    </Cursor>
  )
}
