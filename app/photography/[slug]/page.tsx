'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { photography } from '@/database/photography'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'

interface Props {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  const { language } = useLanguage()

  const { labelEn, labelCs, images } = photography.filter(
    (data: any) => data.slug === params.slug
  )[0]

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container>
        <Title label={language === 'en' ? labelEn : labelCs} />
        <div className='columns-2 space-y-4'>
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
