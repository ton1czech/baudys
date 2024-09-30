'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { ServiceCard } from './service-card'
import { Title } from '../title'
import { SeeAll } from '../see-all'
import { CalendarCheck, Laptop, Camera } from 'lucide-react'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <div>
      <Container className='pb-40 lg:pb-60 xl:pb-80'>
        <Title label={language === 'en' ? 'Services' : 'Služby'} />

        <div className='grid gap-8 lg:grid-cols-2'>
          <ServiceCard
            title={language === 'en' ? 'Web Development' : 'Tvorba Webu'}
            body={
              language === 'en'
                ? 'I bring your visions to life by responsibly creating websites that represent you.'
                : 'Přináším vašim vizím život pomocí zodpovědné tvorby webových stránkek, které vás reprezentují.'
            }
            icon={Laptop}
            image='/home/services/2.webp'
            href='/services/web-development'
          />
          <ServiceCard
            title={language === 'en' ? 'Photography' : 'Fotografování'}
            body={
              language === 'en'
                ? 'I capture moments and create memories that last a lifetime.'
                : 'Zachycuji okamžiky a vytvářím vzpomínky, které přetrvají celý život.'
            }
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
