'use client'

import { useState } from 'react'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Skeleton } from '../ui/skeleton'

interface Props {
  item: any
}

export const GalleryItem = ({ item }: Props) => {
  const { language } = useLanguage()
  const { setType, setIsHovering, setIsNotHovering } = useCursor()

  const [isLoading, setIsLoading] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Link
        onMouseEnter={() => {
          setIsHovering()
          setIsHovered(true)
          setType('photography')
        }}
        onMouseLeave={() => {
          setIsNotHovering()
          setIsHovered(false)
          setType('')
        }}
        href={`/gallery/${item.slug}`}
        className='flex flex-col flex-nowrap group relative cursor-none'
      >
        {isLoading && <Skeleton className='w-full h-[450px]' />}
        <img
          src={item.images[0]}
          alt={language === 'en' ? item.labelEn : item.labelCs}
          onLoad={() => setIsLoading(false)}
          className='transition duration-300 rounded-xl object-cover'
          style={{
            display: isLoading ? 'none' : 'block',
            filter: isHovered ? 'brightness(100%)' : 'brightness(85%)',
          }}
        />
        <p className='text-sm text-zinc-200 absolute bottom-2 left-2 bg-black/20 p-1 rounded-md'>
          {language === 'en' && item.labelEn}
          {language === 'cs' && item.labelCs}
        </p>
        <p className='absolute bottom-2 right-2 text-xs bg-black/5 p-1 rounded-md text-zinc-300'>
          {item.date}
        </p>
      </Link>
    </motion.div>
  )
}
