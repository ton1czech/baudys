import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  image: string
  enterFullscreenView: (photo: string) => void
}

export const FeedItem = ({ image, enterFullscreenView }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Skeleton className='w-full h-[500px]' />}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={() => enterFullscreenView(image)}
        onLoad={() => setIsLoading(false)}
        src={image}
        alt='image'
        className='cursor-pointer'
        style={{
          display: isLoading ? 'none' : 'block',
        }}
      />
    </>
  )
}
