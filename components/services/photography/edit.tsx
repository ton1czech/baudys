'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { useLanguage } from '@/store/use-language'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'
export const Edit = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Post-Processing' : 'Postproces'} />

      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src='/services/photography/edit/before.webp'
            srcSet='/services/photography/edit/before.webp'
            alt='before'
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src='/services/photography/edit/after.webp'
            srcSet='/services/photography/edit/after.webp'
            alt='after'
          />
        }
      />
    </Container>
  )
}
