'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { Title } from '../title'
import { projects } from '@/database/projects'
import { Project } from '../project'
import { SeeAll } from './see-all'

export const Projects = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Projects' : 'Projekty'} />

      <div className='grid lg:grid-cols-2 gap-20'>
        {projects.map(({ name, year, image, url }) => (
          <Project name={name} year={year} image={image} url={url} />
        ))}
      </div>

      <div className='flex justify-center mt-10'>
        <SeeAll href='/projects' />
      </div>
    </Container>
  )
}
