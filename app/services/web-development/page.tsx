import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { Features } from '@/components/services/web-development/features'
import { Intro } from '@/components/services/web-development/intro'
import { Process } from '@/components/services/web-development/process'
import { Timeline } from '@/components/services/web-development/timeline'

export default function Page() {
  return (
    <div className='mb-20 mt-28 lg:mb-32 lg:mt-32'>
      <Intro />
      <Process />
      <Timeline />
      <Features />
      <Projects />
      <Contact />
    </div>
  )
}
