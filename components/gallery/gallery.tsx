import { gallery } from '@/database/photography'
import { Container } from '../container'
import { GalleryItem } from './gallery-item'

export const Gallery = () => {
  return (
    <Container className='columns-3 space-y-6'>
      {gallery.map(item => (
        <GalleryItem key={item.href} item={item} />
      ))}
    </Container>
  )
}
