import { Container } from '@/components/container'
import { Project } from '@/components/project'
import { projects } from '@/database/projects'

export default function Page() {
  return (
    <Container className='grid lg:grid-cols-2 gap-20 mt-28 lg:mt-32 mb-20 lg:mb-32'>
      {projects.map(({ name, year, image, href }) => (
        <Project key={href} name={name} year={year} image={image} href={href} />
      ))}
    </Container>
  )
}
