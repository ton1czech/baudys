'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { feed } from '@/database/photography'
import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SeeAll } from '@/components/see-all'
import { FeedItem } from './feed-item'

export const Feed = () => {
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<string>()
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  const [transformOrigin, setTransformOrigin] = useState<string>()

  const enterFullscreenView = (photo: string): void => {
    setFullscreen(true)
    setZoomLevel(1)
    setCurrentImage(photo)
  }

  const exitFullscreenView = () => {
    setFullscreen(false)
  }

  const handleZoomLevel = (event: React.MouseEvent<HTMLImageElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setTransformOrigin(`${x}px ${y}px`)
    setZoomLevel(prevZoomLevel => (prevZoomLevel < 2 ? prevZoomLevel + 1 : 1))
  }

  return (
    <>
      <Container className='pb-40 lg:pb-60 xl:pb-80'>
        <Title label='Feed' />

        <div className='grid grid-cols-3 gap-3'>
          {feed.map(image => (
            <FeedItem
              key={image}
              image={image}
              enterFullscreenView={enterFullscreenView}
            />
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <SeeAll href='/gallery' />
        </div>
      </Container>

      {fullscreen && (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-10 grid w-full h-full overflow-hidden bg-background select-none place-content-center'>
          <Container className='relative flex flex-col gap-2 overflow-hidden px-0 mx-4'>
            <img
              src={currentImage}
              alt='image'
              className={cn(
                'lg:h-full max-h-[82vh] overflow-hidden select-none',
                zoomLevel === 1 ? 'cursor-zoom-in' : 'cursor-zoom-out'
              )}
              style={{
                scale: zoomLevel,
                transformOrigin,
              }}
              onClick={handleZoomLevel}
            />

            <div
              onClick={exitFullscreenView}
              className='absolute rounded-md cursor-pointer right-2 top-2 bg-red-600 hover:bg-red-500 transition p-2 place-self-end'
            >
              <X className='size-4 md:size-8' />
            </div>
          </Container>
        </div>
      )}
    </>
  )
}
