'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { Photo } from '../gallery/photo'
import { Title } from '../title'
import { SeeAll } from '../see-all'
import { vertical } from '@/database/gallery'
import { shuffle } from '@/lib/utils'

export const Gallery = () => {
  const { language } = useLanguage()

  const shuffledGallery = shuffle(
    [...vertical],
    Math.floor(Math.random() * 250),
  )

  return (
    <section>
      <Container>
        <Title label={language === 'en' ? 'Gallery' : 'Galerie'} />
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6'>
          {shuffledGallery.slice(0, 3).map((photo) => (
            <Photo key={photo} photo={photo} />
          ))}
        </div>

        <div className='mt-2 flex justify-end'>
          <SeeAll href='/gallery' />
        </div>
      </Container>
    </section>
  )
}
