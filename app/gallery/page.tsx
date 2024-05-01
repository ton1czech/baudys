'use client'

import { Contact } from '@/components/contact'
import { Categories } from '@/components/gallery/categories'
import { Gallery } from '@/components/gallery/gallery'
import { Title } from '@/components/title'
import { useLanguage } from '@/store/use-language'

export default function Page() {
  const { language } = useLanguage()

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Title label={language === 'en' ? 'gallery' : 'galerie'} />
      <Categories />
      <Gallery />
      <Contact />
    </div>
  )
}
