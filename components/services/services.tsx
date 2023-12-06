'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { Service } from './service'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80'>
      <Service
        label='Web Development'
        body={
          language === 'en'
            ? 'I will bring your visions to life. I responsibly design and build websites that represent you. I provide responsive design, intuitive navigation and aesthetic elements to reach your audience. I will bring your unique stories, ideas and messages to life through a high quality, modern website.'
            : 'Přinesu vašim vizím život. Zodpovědně navrhuji a vytvářím webové stránky, které vás reprezentují. Zajistím responzivní design, intuitivní navigaci a estetické prvky, abyste oslovili své publikum. Vaše jedinečné příběhy, nápady a poselství přineseu k životu prostřednictvím kvalitního a moderního webu.'
        }
        img='/services/webdev.webp'
        href='/services/web-development'
      />
    </Container>
  )
}
