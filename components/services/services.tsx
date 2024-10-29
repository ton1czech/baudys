'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { Service } from './service'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <Container className='space-y-32 md:space-y-20 lg:space-y-28'>
      <Service
        label={language === 'en' ? 'Web Development' : 'Tvorba Webu'}
        body={
          language === 'en'
            ? 'I will bring your visions to life. I responsibly design and build websites that represent you. I provide responsive design, intuitive navigation and aesthetic elements to reach your audience. I will bring your unique stories, ideas and messages to life through a high quality, modern website.'
            : 'Přinesu vašim vizím život. Zodpovědně navrhuji a vytvářím webové stránky, které vás reprezentují. Zajistím responzivní design, intuitivní navigaci a estetické prvky, abyste oslovili své publikum. Vaše jedinečné příběhy, nápady a poselství přinesu k životu prostřednictvím kvalitního a moderního webu.'
        }
        img='/services/web-development/hero.webp'
        href='/services/web-development'
        center
      />
      <Service
        label={language === 'en' ? 'Photography' : 'Fotografování'}
        body={
          language === 'en'
            ? "I capture moments and create memories that last a lifetime. Whether it's cars, portraits, modeling, events, architecture, travel, nature, or animals, I bring a professional touch to each shot. My photography services provide high-quality images that tell your unique story."
            : 'Zachycuji okamžiky a vytvářím vzpomínky, které přetrvají celý život. Ať už se jedná o auta, portréty, modeling, akce, architekturu, cestování, přírodu nebo zvířata, ke každému záběru přistupuji s profesionálním přístupem. Mé fotografické služby poskytují vysoce kvalitní snímky, které vyprávějí váš jedinečný příběh.'
        }
        img='/services/photography/hero.webp'
        href='/services/photography'
        center
      />
    </Container>
  )
}
