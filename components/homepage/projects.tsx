'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { Title } from '../title'

export const Projects = () => {
  const { language } = useLanguage()
  return (
    <Container>
      <Title label={language === 'en' ? 'Projects' : 'Projekty'} />
      <div>
        <p>projects</p>
      </div>
    </Container>
  )
}
