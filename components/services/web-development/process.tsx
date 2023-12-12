'use client'

import { Container } from '@/components/container'
import { ProcessItem } from './process-item'
import { useLanguage } from '@/store/useLanguage'

export const Process = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80 space-y-14 lg:space-y-20 xl:space-y-40'>
      <ProcessItem
        align='right'
        label={language === 'en' ? 'A unique approach' : 'Jedinečný přístup'}
        body={
          language === 'en'
            ? 'I handle each project with a unique approach. Each website is special to me and I try to bring personality and originality to it. I do not use any templates or pre-made projects. I create the entire website in a programming language and therefore there are no limitations. My goal is not just to create an ordinary website, but to create an environment that truly reflects your vision and values.'
            : 'Každému projektu se věnuji s jedinečným přístupem. Každý web je pro mě unikátní a snažím se do něj přinést osobitost a originalitu. Nepoužívám žádné šablony ani předvytvořené projekty. Celý web vytvořím v programovacím jazyce a proto zde nejsou žádné omezení. Mým cílem není jen vytvořit běžný web, ale vytvořit prostředí, které skutečně odráží vaše vize a hodnoty.'
        }
        img='/services/web-development/process/1.webp'
      />
      <ProcessItem
        align='left'
        label={language === 'en' ? 'Innovative solutions' : 'Inovativní řešení'}
        body={
          language === 'en'
            ? 'I am an advocate of innovation and modern technology in web development. My approaches go hand in hand with the latest trending innovations to create a website that will work and look beautiful on all devices under any circumstances.'
            : 'Jsem zastánce inovací a moderních technologií ve tvorbě webových stránek. Moje přístupy jdou ruku v ruce s nejnovějšími trendovými inovacemi, abychom vytvořil web, který bude fungovat a vypadat krásně na všech zařízeních za jakýchkoliv okolností.'
        }
        img='/services/web-development/process/2.webp'
      />
      <ProcessItem
        align='right'
        label={
          language === 'en'
            ? 'I care about your satisfaction'
            : 'Záleží mi na Vaší spokojenosti'
        }
        body={
          language === 'en'
            ? 'Your satisfaction is key. I strive not only to deliver an excellent website, but also to ensure that the entire collaborative process is carried out with the utmost care and attention to your needs. I am here to guide you from the first idea to the perfect result. There is no shortage of lifetime guarantees or the ability to continue to expand the project.'
            : 'Vaše spokojenost je klíčová. Snažím se nejen dodat vynikající webové stránky, ale také zajistit, že celý proces spolupráce probíhá s maximální péčí a pozorností k Vašim potřebám. Jsem tu, abych Vás vedl od prvního nápadu až po dokonalý výsledek. Nechybí doživotní záruka, ani možnost projekt nadále rozšiřovat.'
        }
        img='/services/web-development/process/3.webp'
      />
    </Container>
  )
}
