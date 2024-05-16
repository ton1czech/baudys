'use client'

import { gallery } from '@/database/photography'
import { Container } from '../container'
import { GalleryItem } from './gallery-item'
import { useGallery } from '@/store/use-gallery'

export const Gallery = () => {
  const { animals, cars, events, fitness, nature, monuments } = useGallery()

  const getFilteredGallery = () => {
    return gallery.filter(item => {
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

  return (
    <Container className='sm:columns-2 lg:columns-3 space-y-6 pb-40 lg:pb-60 xl:pb-80'>
      {filteredGallery.map(item => (
        <GalleryItem key={item.slug} item={item} />
      ))}
    </Container>
  )
}
