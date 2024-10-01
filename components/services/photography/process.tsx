'use client'

import { Container } from '@/components/container'
import { ProcessItem } from './process-item'
import { useLanguage } from '@/store/use-language'

export const Process = () => {
  const { language } = useLanguage()

  return (
    <Container className='space-y-14 lg:space-y-20'>
      <ProcessItem
        align='right'
        label={
          language === 'en'
            ? 'Photography with Fujifilm XT30'
            : 'Fotografie s Fujifilm XT30'
        }
        body={
          language === 'en'
            ? 'I use the Fujifilm X-T30 camera with several lenses to capture stunning photographs. Each shot is carefully composed to ensure the highest quality, whether I am photographing cars, portraits, modeling, events, architecture, travel, nature, or animals.'
            : 'Používám fotoaparát Fujifilm X-T30 s několika objektivy k zachycení ohromujících fotografií. Každý snímek je pečlivě komponován, aby byla zajištěna nejvyšší kvalita, ať už fotografuji auta, portréty, modeling, akce, architekturu, cestování, přírodu nebo zvířata.'
        }
        img='/services/photography/process/1.webp'
      />
      <ProcessItem
        align='left'
        label={
          language === 'en'
            ? 'Special Filters for Unique Effects'
            : 'Speciální Filtry pro Unikátní Efekty'
        }
        body={
          language === 'en'
            ? 'I use special filters on my lenses to create unique effects and enhance the visual appeal of my photographs. This allows me to produce images that are not only visually stunning but also rich in detail and color.'
            : 'Používám speciální filtry na objektivech, abych vytvořil unikátní efekty a zvýšil vizuální přitažlivost mých fotografií. To mi umožňuje vytvářet snímky, které jsou nejen vizuálně ohromující, ale také bohaté na detaily a barvy.'
        }
        img='/services/photography/process/2.webp'
      />
      <ProcessItem
        align='right'
        label={
          language === 'en'
            ? 'Post-Processing for Perfection'
            : 'Postproces pro Dokonalost'
        }
        body={
          language === 'en'
            ? 'Every photograph goes through a detailed post-processing phase to ensure perfection. I create images in various styles, ready to be printed and used as wall art or for professional use on social media or websites.'
            : 'Každá fotografie prochází důkladným postprocesem, aby byla zajištěna dokonalost. Vytvářím snímky v různých stylech, připravené k tisku a použití jako obraz na stěnu nebo pro profesionální použití na sociálních sítích či na webu.'
        }
        img='/services/photography/process/3.webp'
      />
    </Container>
  )
}
