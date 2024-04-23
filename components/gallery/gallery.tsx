'use client'

import { gallery } from '@/database/photography'
import { Container } from '../container'
import { GalleryItem } from './gallery-item'
import { useGallery } from '@/store/use-gallery'

export const Gallery = () => {
  const { animals, cars } = useGallery()

  const getFilteredGallery = () => {
    if (animals && cars) {
      return gallery
    }

    return gallery.filter(item => {
      if (animals && cars) {
        return true
      } else if (animals) {
        return item.categories.includes('animals')
      } else if (cars) {
        return item.categories.includes('cars')
      }
      return false
    })
  }

  const filteredGallery = getFilteredGallery()

  return (
    <Container className='sm:columns-2 lg:columns-3 space-y-6'>
      {filteredGallery.map(item => (
        <GalleryItem key={item.href} item={item} />
      ))}
    </Container>
  )
}
