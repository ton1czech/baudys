import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects/projects'

export default function Page() {
  return (
    <div className='space-y-20 lg:space-y-40'>
      <Projects />
      <Contact />
    </div>
  )
}
