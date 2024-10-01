'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  image: string
}

export const FeedItem = ({ image }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <Skeleton className='h-[200px] w-full md:h-[350px] lg:h-[500px]' />
      )}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onLoad={() => setIsLoading(false)}
        src={image}
        alt='image'
        style={{
          display: isLoading ? 'none' : 'block',
        }}
      />
    </>
  )
}
