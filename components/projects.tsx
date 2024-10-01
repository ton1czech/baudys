'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from './container'
import { Title } from './title'
import { projects } from '@/database/projects'
import { Project } from './project'
import { SeeAll } from './see-all'

export const Projects = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <Title label={language === 'en' ? 'Projects' : 'Projekty'} />

      <div className='grid gap-20 sm:grid-cols-2'>
        {projects
          .slice(0, 2)
          .map(({ name, year, image, href, servicesEn, servicesCs }) => (
            <Project
              key={href}
              name={name}
              year={year}
              image={image}
              href={href}
              servicesCs={servicesCs}
              servicesEn={servicesEn}
            />
          ))}
      </div>

      <div className='mt-10 flex justify-end'>
        <SeeAll href='/projects' />
      </div>
    </Container>
  )
}
