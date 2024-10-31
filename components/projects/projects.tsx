import { projects } from '@/database/projects'
import { Container } from '../container'
import { Project } from '../project'

export const Projects = () => {
  return (
    <Container className='grid gap-x-20 gap-y-40 sm:grid-cols-2'>
      {projects.map(({ name, year, image, href }) => (
        <Project key={href} name={name} year={year} image={image} href={href} />
      ))}
    </Container>
  )
}
