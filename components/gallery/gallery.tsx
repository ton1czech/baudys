import { gallery } from '@/database/photography'
import { Container } from '../container'
import { GalleryItem } from './gallery-item'

export const Gallery = () => {
  return (
    <Container className='sm:columns-2 lg:columns-3 space-y-6'>
      {gallery.map(item => (
        <GalleryItem key={item.href} item={item} />
      ))}
    </Container>
  )
}
