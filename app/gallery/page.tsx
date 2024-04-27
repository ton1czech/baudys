'use client'

import { Container } from '@/components/container'
import { Categories } from '@/components/gallery/categories'
import { Gallery } from '@/components/gallery/gallery'
import { Title } from '@/components/title'
import { useLanguage } from '@/store/use-language'

export default function Page() {
  const { language } = useLanguage()

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Title label={language === 'en' ? 'gallery' : 'galerie'} />
      <Container className='flex justify-between mb-10'>
        <Categories />
      </Container>
      <Gallery />
    </div>
  )
}