import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects/projects'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Projects />
      <Contact />
    </div>
  )
}
