'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { ServiceCard } from './service-card'
import { Title } from '../title'
import { SeeAll } from '../see-all'
import { Laptop, Camera } from 'lucide-react'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <div>
      <Container className='pb-40 lg:pb-60 xl:pb-80'>
        <Title label={language === 'en' ? 'Services' : 'Služby'} />

        <div className='grid gap-8 lg:grid-cols-2'>
          <ServiceCard
            title={language === 'en' ? 'Web Development' : 'Tvorba Webu'}
            icon={Laptop}
            image='/home/services/2.webp'
            href='/services/web-development'
          />
          <ServiceCard
            title={language === 'en' ? 'Photography' : 'Fotografování'}
            icon={Camera}
            image='/home/services/1.webp'
            href='/services/photography'
          />
        </div>

        <div className='mt-10 flex justify-center'>
          <SeeAll href='/services' />
        </div>
      </Container>
    </div>
  )
}
