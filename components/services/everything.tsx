'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { Title } from '../title'
import { EverythingItem } from './everything-item'

export const Everything = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <Title label={language === 'en' ? 'Everything I do' : 'Vše, co dělám'} />

      <div className='grid lg:grid-cols-3 gap-10 lg:gap-20'>
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
                ]
              : ['', '', '', '', '', '']
          }
        />
        <EverythingItem
          title={language === 'en' ? 'Management' : ''}
          items={
            language === 'en'
              ? ['newsletter', 'emails', 'news', 'hosting', 'analytics reports']
              : ['', '', '', '', '', '']
          }
        />
        <EverythingItem
          title={language === 'en' ? 'Add-ons' : ''}
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
                ]
              : ['', '', '', '', '', '']
          }
        />
        <EverythingItem
          title={language === 'en' ? 'Configuration' : ''}
          items={
            language === 'en'
              ? ['domain', 'hosting platform', 'search console indexing', 'SEO']
              : ['', '', '', '', '', '']
          }
        />
      </div>
    </Container>
  )
}
