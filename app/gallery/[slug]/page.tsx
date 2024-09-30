'use client'

import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { AlbumItem } from '@/components/gallery/album-item'
import { Title } from '@/components/title'
import { gallery } from '@/database/photography'
import { useLanguage } from '@/store/use-language'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  const { language } = useLanguage()

  const { labelEn, labelCs, images } = gallery.filter(
    (data: any) => data.slug === params.slug,
  )[0]

  const totalItems = images.length
  const itemsPerColumn = Math.ceil(totalItems / 2)

  const imagesWithIds = images.map((image, index) => ({
    url: image,
    id: index + 1,
  }))

  return (
    <div className='mb-20 mt-28 lg:mb-32 lg:mt-32'>
      <Container className='pb-40 lg:pb-60 xl:pb-80'>
        <p className='mb-4 inline-flex items-center gap-2 text-zinc-400'>
          <Link href='/gallery' className='hover:underline'>
            {language === 'en' && 'gallery'}
            {language === 'cs' && 'galerie'}
          </Link>
          <ChevronRight size={18} />
          <span className='font-bold'>
            {language === 'en' && labelEn}
            {language === 'cs' && labelCs}
          </span>
        </p>

        <Title label={language === 'en' ? labelEn : labelCs} />

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            {imagesWithIds.slice(0, itemsPerColumn).map((image) => (
              <AlbumItem key={image.url} image={image} />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            {imagesWithIds.slice(itemsPerColumn).map((image) => (
              <AlbumItem key={image.url} image={image} />
            ))}
          </div>
        </div>
      </Container>
      <Contact />
    </div>
  )
}
