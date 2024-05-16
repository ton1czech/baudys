'use client'

import { gallery } from '@/database/photography'
import { Container } from '../container'
import { GalleryItem } from './gallery-item'
import { useGallery } from '@/store/use-gallery'

export const Gallery = () => {
  const { animals, cars, events, fitness } = useGallery()

  const getFilteredGallery = () => {
    return gallery.filter(item => {
      if (animals && cars && events && fitness) {
        return true
      } else if (animals && !cars && !events && !fitness) {
        return item.categories.includes('animals')
      } else if (!animals && cars && !events && !fitness) {
        return item.categories.includes('cars')
      } else if (!animals && !cars && events && !fitness) {
        return item.categories.includes('events')
      } else if (!animals && !cars && !events && fitness) {
        return item.categories.includes('fitness')
      } else if (animals && cars && !events && !fitness) {
        return (
          item.categories.includes('animals') ||
          item.categories.includes('cars')
        )
      } else if (animals && !cars && events && !fitness) {
        return (
          item.categories.includes('animals') ||
          item.categories.includes('events')
        )
      } else if (animals && !cars && !events && fitness) {
        return (
          item.categories.includes('animals') ||
          item.categories.includes('fitness')
        )
      } else if (!animals && cars && events && !fitness) {
        return (
          item.categories.includes('cars') || item.categories.includes('events')
        )
      } else if (!animals && cars && !events && fitness) {
        return (
          item.categories.includes('cars') ||
          item.categories.includes('fitness')
        )
      } else if (!animals && !cars && events && fitness) {
        return (
          item.categories.includes('events') ||
          item.categories.includes('fitness')
        )
      } else if (animals && cars && events && !fitness) {
        return (
          item.categories.includes('animals') ||
          item.categories.includes('cars') ||
          item.categories.includes('events')
        )
      } else if (animals && cars && !events && fitness) {
        return (
          item.categories.includes('animals') ||
          item.categories.includes('cars') ||
          item.categories.includes('fitness')
        )
      } else if (animals && !cars && events && fitness) {
        return (
          item.categories.includes('animals') ||
          item.categories.includes('events') ||
          item.categories.includes('fitness')
        )
      } else if (!animals && cars && events && fitness) {
        return (
          item.categories.includes('cars') ||
          item.categories.includes('events') ||
          item.categories.includes('fitness')
        )
      } else {
        return false
      }
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
