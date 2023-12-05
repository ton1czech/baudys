import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { Project } from '@/components/project'
import { projects } from '@/database/projects'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container className='grid lg:grid-cols-2 gap-20 pb-20 lg:pb-60 xl:pb-80'>
        {projects.map(({ name, year, image, href }) => (
          <Project
            key={href}
            name={name}
            year={year}
            image={image}
            href={href}
          />
        ))}
      </Container>
      <Contact />
    </div>
  )
}
