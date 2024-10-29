'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { Photo } from '../gallery/photo'
import { Title } from '../title'
import { SeeAll } from '../see-all'

export const Gallery = () => {
  const { language } = useLanguage()

  return (
    <section>
      <Container>
        <Title label={language === 'en' ? 'Gallery' : 'Galerie'} />
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6'>
          <Photo photo='/gallery/e39/1.webp' />
          <Photo photo='/gallery/renda/1.webp' />
          <Photo photo='/gallery/spain/3.webp' />
        </div>

        <div className='mt-10 flex justify-end'>
          <SeeAll href='/gallery' />
        </div>
      </Container>
    </section>
  )
}
