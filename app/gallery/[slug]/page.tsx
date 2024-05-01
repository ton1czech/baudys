'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { gallery } from '@/database/photography'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

interface Props {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  const { language } = useLanguage()
  const { setIsNotHovering } = useCursor()

  const { labelEn, labelCs, images } = gallery.filter(
    (data: any) => data.slug === params.slug
  )[0]

  useEffect(() => {
    setIsNotHovering()
  }, [])

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container>
        <p className='inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
          <Link href='/gallery'>
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

        <div className='sm:columns-2 space-y-4'>
          {images.map(image => (
            <motion.img
              key={image}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={image}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
