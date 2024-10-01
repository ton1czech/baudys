import { useState } from 'react'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Skeleton } from '../ui/skeleton'

interface Props {
  item: any
}

export const GalleryItem = ({ item }: Props) => {
  const { language } = useLanguage()

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
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        href={`/gallery/${item.slug}`}
        className='group relative flex flex-col flex-nowrap'
      >
        {isLoading && (
          <Skeleton className='h-[200px] w-full md:h-[350px] lg:h-[500px]' />
        )}
        <img
          src={item.images[0]}
          alt={language === 'en' ? item.labelEn : item.labelCs}
          onLoad={() => setIsLoading(false)}
          className='rounded-lg transition duration-300'
          style={{
            display: isLoading ? 'none' : 'block',
            filter: isHovered ? 'brightness(100%)' : 'brightness(85%)',
          }}
        />
        <p className='absolute bottom-2 left-2 rounded-md bg-black/20 p-1 text-sm text-zinc-200'>
          {language === 'en' && item.labelEn}
          {language === 'cs' && item.labelCs}
        </p>
        <p className='absolute bottom-2 right-2 rounded-md bg-black/5 p-1 text-xs text-zinc-300'>
          {item.date}
        </p>
      </Link>
    </motion.div>
  )
}
