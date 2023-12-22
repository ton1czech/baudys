import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { Features } from '@/components/services/web-development/features'
import { Intro } from '@/components/services/web-development/intro'
import { Process } from '@/components/services/web-development/process'
import { Timeline } from '@/components/services/web-development/timeline'
import { TechnologiesCarousel } from '@/components/technologies-carousel/technologies-carousel'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Intro />
      <Process />
      <Timeline />
      <Features />
      <Projects />
      <TechnologiesCarousel />
      <Contact />
    </div>
  )
}
