'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { Title } from '../title'
import { EverythingItem } from './everything-item'

export const Everything = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <Title label={language === 'en' ? 'Everything I do' : 'Vše, co dělám'} />

      <div className='grid lg:grid-cols-3 gap-10 lg:gap-20 pb-40 lg:pb-60 xl:pb-80'>
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
                  'web app',
                ]
              : [
                  'front-end',
                  'eshop',
                  'rezeverační systém',
                  'socální síť',
                  'platforma',
                  '3D web',
                  'webová aplikace',
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
                  'mobile friendly',
                  'interactive maps',
                  'multilingualism',
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
                  'platební brána',
                  'animace',
                  'mobilní responzivita',
                  'interaktivní mapy',
                  'multijazyčnost',
                ]
          }
        />
        <EverythingItem
          title={language === 'en' ? 'Cars' : 'Auta'}
          items={
            language === 'en'
              ? ['ECU tune (BMW)', 'TPMS (programming + installation)']
              : ['Ladění ECU (BMW)', 'TPMS (programování + montáž)']
          }
        />{' '}
        <EverythingItem
          title={language === 'en' ? 'Photography' : 'Fotografování'}
          items={
            language === 'en'
              ? [
                  'cars',
                  'portraits',
                  'modeling',
                  'events',
                  'architecture',
                  'travel',
                  'nature',
                  'animals',
                ]
              : [
                  'auta',
                  'portréty',
                  'modeling',
                  'akce',
                  'architektura',
                  'cestování',
                  'příroda',
                  'zvířata',
                ]
          }
        />
      </div>
    </Container>
  )
}
