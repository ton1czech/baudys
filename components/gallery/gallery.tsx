'use client'

import { gallery } from '@/database/photography'
import { Container } from '../container'
import { GalleryItem } from './gallery-item'
import { useGallery } from '@/store/use-gallery'

export const Gallery = () => {
  const { animals, cars } = useGallery()

  const getFilteredGallery = () => {
    return gallery.filter(item => {
      if (animals && cars) {
        return true
      } else if (animals && !cars) {
        return item.categories.includes('animals')
      } else if (!animals && cars) {
        return item.categories.includes('cars')
      }
      return false
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
