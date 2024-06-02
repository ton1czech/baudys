'use client'

import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { AlbumItem } from '@/components/gallery/album-item'
import { Title } from '@/components/title'
import { Skeleton } from '@/components/ui/skeleton'
import { gallery } from '@/database/photography'
import { cn } from '@/lib/utils'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  const { language } = useLanguage()
  const { setIsNotHovering } = useCursor()

  const { labelEn, labelCs, images } = gallery.filter(
    (data: any) => data.slug === params.slug
  )[0]

  const [fullscreen, setFullscreen] = useState<boolean>(false)
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  const [transformOrigin, setTransformOrigin] = useState<string>('')
  const [touchStartX, setTouchStartX] = useState<number>(0)
  const [isSwiping, setIsSwiping] = useState<boolean>(false)

  const totalItems = images.length
  const itemsPerColumn = Math.ceil(totalItems / 2)

  const imagesWithIds = images.map((image, index) => ({
    url: image,
    id: index + 1,
  }))

  const prevImage = () => {
    const isFirst = currentIdx === 1
    const newIndex = isFirst ? images.length : currentIdx - 1
    setCurrentIdx(newIndex)
  }

  const nextImage = () => {
    const isLast = currentIdx === images.length
    const newIndex = isLast ? 1 : currentIdx + 1
    setCurrentIdx(newIndex)
  }

  const enterFullscreenView = (idx: number): void => {
    setFullscreen(true)
    setZoomLevel(1)
    setCurrentIdx(idx + 1)
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

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return

    const touchMoveX = event.touches[0].clientX
    const deltaX = touchMoveX - touchStartX
    if (deltaX > 50) {
      prevImage()
      setTouchStartX(0)
      setIsSwiping(false)
    } else if (deltaX < -50) {
      nextImage()
      setTouchStartX(0)
      setIsSwiping(false)
    }
  }

  useEffect(() => {
    setIsNotHovering()
  }, [])

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container className='pb-40 lg:pb-60 xl:pb-80'>
        <p className='inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mb-4'>
          <Link href='/gallery' className='hover:underline'>
            {language === 'en' && 'gallery'}
            {language === 'cs' && 'galerie'}
          </Link>
          <ChevronRight size={18} />
          <span className='font-bold'>
            {language === 'en' && labelEn}
            {language === 'cs' && labelCs}
          </span>
        </p>

        <Title label={language === 'en' ? labelEn : labelCs} />

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            {imagesWithIds.slice(0, itemsPerColumn).map(image => (
              <AlbumItem
                key={image.url}
                image={image}
                enterFullscreenView={enterFullscreenView}
              />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            {imagesWithIds.slice(itemsPerColumn).map(image => (
              <AlbumItem
                key={image.url}
                image={image}
                enterFullscreenView={enterFullscreenView}
              />
            ))}
          </div>
        </div>
      </Container>
      <Contact />

      {fullscreen && (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className='fixed top-0 bottom-0 left-0 right-0 z-10 grid w-full h-full overflow-hidden bg-background select-none place-content-center'
        >
          <Container className='relative flex flex-col gap-2 overflow-hidden px-0 mx-4'>
            <img
              src={`/gallery/${params.slug}/${currentIdx}.webp`}
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

            <ChevronRight
              className='absolute right-2 bg-violet-700 hover:bg-violet-800 border border-zinc-100/60 rounded-full p-2 md:p-3 text-zinc-200 top-[50%] w-10 h-10 md:w-14 md:h-14 cursor-pointer translate-y-[-50%]'
              onClick={() => nextImage()}
            />

            <ChevronLeft
              className='absolute left-2 bg-violet-700 hover:bg-violet-800 border border-zinc-100/60 rounded-full p-2 md:p-3 text-zinc-200 top-[50%] w-10 h-10 md:w-14 md:h-14 cursor-pointer translate-y-[-50%]'
              onClick={() => prevImage()}
            />
          </Container>
        </div>
      )}
    </div>
  )
}
