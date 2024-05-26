import { projects } from '@/database/projects'
import { Container } from '../container'
import { Project } from '../project'

export const Projects = () => {
  return (
    <Container className='grid sm:grid-cols-2 gap-x-20 gap-y-40 pb-40 lg:pb-60 xl:pb-80'>
      {projects.map(({ name, year, image, href, servicesCs, servicesEn }) => (
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
    </Container>
  )
}
