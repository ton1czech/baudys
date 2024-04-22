'use client'

import { useState } from 'react'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

interface Props {
  item: any
}

export const GalleryItem = ({ item }: Props) => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      onMouseEnter={() => {
        setIsHovering()
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsNotHovering()
        setIsHovered(false)
      }}
      href={item.href}
      className='flex flex-col flex-nowrap group relative'
    >
      <img
        src={item.images[0]}
        className='transition duration-300 rounded-xl'
        style={{ filter: isHovered ? 'brightness(100%)' : 'brightness(65%)' }}
      />
      <p className='text-sm text-zinc-700 dark:text-zinc-300 absolute bottom-2 left-2'>
        {language === 'en' && item.labelEn}
        {language === 'cs' && item.labelCs}
      </p>
    </Link>
  )
}
