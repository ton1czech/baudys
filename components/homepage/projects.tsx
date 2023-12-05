'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { Title } from '../title'

export const Projects = () => {
  const { language } = useLanguage()
  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Projects' : 'Projekty'} />
      <div>
        <p>projects</p>
      </div>
    </Container>
  )
}
