import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { Projects } from '@/components/homepage/projects'
import { Features } from '@/components/services/web-development/features'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container className='pb-20 lg:pb-60 xl:pb-80'>
        <Features />
      </Container>

      <Projects />

      <Contact />
    </div>
  )
}
