'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from './container'
import { Title } from './title'
import { projects } from '@/database/projects'
import { Project } from './project'
import { SeeAll } from './homepage/see-all'

export const Projects = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Projects' : 'Projekty'} />

      <div className='grid lg:grid-cols-2 gap-20'>
        {projects
          .slice(0, 2)
          .map(({ name, year, image, href, descriptionEn, descriptionCs }) => (
            <Project
              key={href}
              name={name}
              year={year}
              image={image}
              href={href}
              descriptionEn={descriptionEn}
              descriptionCs={descriptionCs}
            />
          ))}
      </div>

      <div className='flex justify-center mt-10'>
        <SeeAll href='/projects' />
      </div>
    </Container>
  )
}
