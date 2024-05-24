'use client'

import { useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { motion } from 'framer-motion'

interface Props {
  image: any
  enterFullscreenView: (id: number) => void
}

export const AlbumItem = ({ image, enterFullscreenView }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Skeleton className='w-full h-[500px]' />}
      <motion.img
        key={image.id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={() => enterFullscreenView(image.id - 1)}
        onLoad={() => setIsLoading(false)}
        src={image.url}
        alt='image'
        className='cursor-pointer'
        style={{
          display: isLoading ? 'none' : 'block',
        }}
      />
    </>
  )
}
