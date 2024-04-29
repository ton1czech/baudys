'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { Service } from './service'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80 space-y-32 md:space-y-20 lg:space-y-28'>
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
        label={language === 'en' ? 'ECU Tune (BMW)' : 'Ladění ECU (BMW)'}
        body={
          language === 'en'
            ? 'Your vehicle holds endless possibilities that I can unlock and customise to your liking. I specialize in programming hidden features for BMW, MINI and Toyota Supra MK5. Thanks to my know-how, you can discover hidden possibilities and customize your car to your exact wishes.'
            : 'Vaše vozidlo skrývá nekonečné možnosti, které mohu odblokovat a přizpůsobit podle vašich představ. Specializuji se v programování skrytých funkcí pro vozy BMW, MINI a Toyota Supra MK5. Díky mému know-how můžete objevit skryté možnosti a upravit si své auto přesně podle vašich přání.'
        }
        img='/services/ecu-tune/hero.webp'
        href='/services/ecu-tune'
        center
      />
      <Service
        label={language === 'en' ? 'TPMS' : 'TPMS'}
        body={
          language === 'en'
            ? 'I specialize in providing TPMS (tire pressure monitoring system) services and smart valve installation for compatible vehicles. With an emphasis on expertise and care, I focus on precision TPMS installation with smart valves if your vehicle is compatible with this technology.'
            : 'Specializuji se na poskytování služeb v oblasti TPMS (systému sledování tlaku v pneumatikách) a instalaci chytrých ventilků pro kompatibilní vozidla. S důrazem na odborné znalosti a pečlivost se zaměřuji na precizní instalaci TPMS s chytrými ventilkami, pokud je vaše vozidlo kompatibilní s touto technologií.'
        }
        img='/services/tpms/hero.webp'
        href='/services/tpms'
        tag={language === 'en' ? 'In collaboration with ' : 'Ve spolupráci s '}
        tagLink='pneuservisbaudys.cz'
        center
      />
    </Container>
  )
}
