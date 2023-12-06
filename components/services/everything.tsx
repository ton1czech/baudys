'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { Title } from '../title'
import { EverythingItem } from './everything-item'
import { motion } from 'framer-motion'

export const Everything = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <Title label={language === 'en' ? 'Everything I do' : 'Vše, co dělám'} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='grid lg:grid-cols-3 gap-10 lg:gap-20 pb-20 lg:pb-60 xl:pb-80'
      >
        <EverythingItem
          title={language === 'en' ? 'Engineering' : 'Inženýrství'}
          items={
            language === 'en'
              ? [
                  'front-end',
                  'e-commerce',
                  'booking service',
                  'social site',
                  'platform',
                  '3D website',
                  'web apps',
                ]
              : [
                  'front-end',
                  'eshop',
                  'rezeverační systém',
                  'socální síť',
                  'platforma',
                  '3D web',
                  'webové aplikace',
                ]
          }
        />
        <EverythingItem
          title={language === 'en' ? 'Management' : 'Správa'}
          items={
            language === 'en'
              ? ['newsletter', 'emails', 'news', 'hosting', 'analytics reports']
              : [
                  'newsletter',
                  'emaily',
                  'novinky',
                  'hosting',
                  'analytické přehledy',
                ]
          }
        />
        <EverythingItem
          title={language === 'en' ? 'Add-ons' : 'Doplňky'}
          items={
            language === 'en'
              ? [
                  'newsletter',
                  'email form',
                  '3D elements',
                  'admin interface',
                  'analytics',
                  'popups',
                  'CDN integration',
                  'chatbot',
                  'database connection',
                  'payment gateway',
                  'animations',
                ]
              : [
                  'newsletter',
                  'email formulář',
                  '3D prvky',
                  'admininstrátorské rozhraní',
                  'analytika',
                  'vyskakovací okna',
                  'CDN integrace',
                  'chatbot',
                  'napojení na databázi',
                  'animace',
                ]
          }
        />
        <EverythingItem
          title={language === 'en' ? 'Configuration' : 'Nastavení'}
          items={
            language === 'en'
              ? ['domain', 'hosting platform', 'search engines indexing', 'SEO']
              : [
                  'doména',
                  'hostingová platforma',
                  'indexování ve vyhledávačích',
                  'SEO',
                ]
          }
        />
      </motion.div>
    </Container>
  )
}
