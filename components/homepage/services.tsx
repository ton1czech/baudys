'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { ServiceCard } from './service-card'
import { Title } from '../title'
import { SeeAll } from './see-all'
import { motion } from 'framer-motion'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Container className='pb-20 lg:pb-60 xl:pb-80'>
        <Title label={language === 'en' ? 'Services' : 'Služby'} />

        <div className='grid lg:grid-cols-3 gap-8'>
          <ServiceCard
            title={language === 'en' ? 'Configuration' : 'Konfigurace'}
            body={
              language === 'en'
                ? "The 'Configuration' service means starting a project with careful setup and the first important steps. I work to initialize and optimize your environment for maximum performance and proper functioning. I prepare the basic structure and set key parameters so your project can begin its journey towards success."
                : 'Služba "Konfigurace" znamená zahájení projektu s pečlivým nastavením a prvními důležitými kroky. Pracuji na inicializaci a optimalizaci vašeho prostředí pro maximální výkon a správné fungování. Připravuji základní strukturu a nastavuji klíčové parametry, aby váš projekt mohl začít svou cestu směrem k úspěchu.'
            }
          />
          <ServiceCard
            title={language === 'en' ? 'Web Development' : 'Tvorba Webu'}
            body={
              language === 'en'
                ? "The 'Web Development' service brings your visions to life. I responsibly design and build websites that represent you. I provide responsive design, intuitive navigation and aesthetic elements to reach your audience. I will bring your unique stories, ideas and messages to life through a high quality, modern website."
                : 'Služba "Tvorba Webu" přináší vašim vizím život. Zodpovědně navrhuji a vytvářím webové stránky, které vás reprezentují. Zajistím responzivní design, intuitivní navigaci a estetické prvky, abyste oslovili své publikum. Vaše jedinečné příběhy, nápady a poselství přineseu k životu prostřednictvím kvalitního a moderního webu.'
            }
            highlight
          />
          <ServiceCard
            title={language === 'en' ? 'Monthly Management' : 'Měsíční Správa'}
            body={
              language === 'en'
                ? "The 'Monthly Management' service keeps your digital presence alive and up to date. I'll ensure regular newsletters are sent, emails are answered and content is updated. With these services, you can be sure that your website will always be fresh and relevant to your customers. I will take care of your web platform and you can focus on your business growth."
                : 'Služba "Měsíční Správa" udržuje vaši digitální přítomnost živou a aktuální. Zajistím pravidelné odesílání newsletterů, odpovídání na emaily a aktualizaci obsahu. S těmito službami můžete mít jistotu, že váš web bude vždy svěží a relevantní pro vaše zákazníky. Já se postarám o vaši webovou platformu a vy se můžete soustředit na váš podnikatelský růst.'
            }
          />
        </div>

        <div className='flex justify-center mt-10'>
          <SeeAll href='/services' />
        </div>
      </Container>
    </motion.div>
  )
}
