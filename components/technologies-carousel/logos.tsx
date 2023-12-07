'use client'

import Image from 'next/image'
import { FC } from 'react'
import { SliderItem, SliderContainer } from './slider'

export const Logos: FC = () => (
  <SliderContainer contentWidth={1400}>
    <SliderItem width={200}>
      <Image src='' width={150} height={150} alt='' />
    </SliderItem>
  </SliderContainer>
)
