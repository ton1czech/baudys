'use client'

import { useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { motion } from 'framer-motion'

interface Props {
  image: any
}

export const AlbumItem = ({ image }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Skeleton className='h-[500px] w-full' />}
      <motion.img
        key={image.id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onLoad={() => setIsLoading(false)}
        src={image.url}
        alt='image'
        style={{
          display: isLoading ? 'none' : 'block',
        }}
      />
    </>
  )
}
