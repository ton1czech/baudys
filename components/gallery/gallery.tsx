'use client'

import { gallery } from '@/database/photography'
import { Container } from '../container'
import { GalleryItem } from './gallery-item'
import { useGallery } from '@/store/use-gallery'

export const Gallery = () => {
  const { animals, cars, events, fitness, nature, monuments } = useGallery()

  const getFilteredGallery = () => {
    return gallery.filter((item) => {
      return (
        (animals && item.categories.includes('animals')) ||
        (cars && item.categories.includes('cars')) ||
        (events && item.categories.includes('events')) ||
        (fitness && item.categories.includes('fitness')) ||
        (nature && item.categories.includes('nature')) ||
        (monuments && item.categories.includes('monuments'))
      )
    })
  }

  const filteredGallery = getFilteredGallery()

  const totalItems = filteredGallery.length
  const itemsPer2Column = Math.ceil(totalItems / 2)
  const itemsPer3Column = Math.ceil(totalItems / 3)

  return (
    <Container>
      <div className='grid grid-cols-2 gap-6 md:hidden'>
        <div className='flex flex-col gap-6'>
          {filteredGallery.slice(0, itemsPer2Column).map((item) => (
            <GalleryItem key={item.slug} item={item} />
          ))}
        </div>
        <div className='flex flex-col gap-6'>
          {filteredGallery.slice(itemsPer2Column).map((item) => (
            <GalleryItem key={item.slug} item={item} />
          ))}
        </div>
      </div>

      <div className='hidden grid-cols-3 gap-6 md:grid'>
        <div className='flex flex-col gap-6'>
          {filteredGallery.slice(0, itemsPer3Column).map((item) => (
            <GalleryItem key={item.slug} item={item} />
          ))}
        </div>
        <div className='flex flex-col gap-6'>
          {filteredGallery
            .slice(itemsPer3Column, itemsPer3Column * 2)
            .map((item) => (
              <GalleryItem key={item.slug} item={item} />
            ))}
        </div>
        <div className='flex flex-col gap-6'>
          {filteredGallery
            .slice(itemsPer3Column * 2, itemsPer3Column * 3)
            .map((item) => (
              <GalleryItem key={item.slug} item={item} />
            ))}
        </div>
      </div>
    </Container>
  )
}
