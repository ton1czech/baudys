import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects/projects'
import { TechnologiesCarousel } from '@/components/technologies-carousel/technologies-carousel'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Projects />
      <TechnologiesCarousel />
      <Contact />
    </div>
  )
}
