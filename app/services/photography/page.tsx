import { Contact } from '@/components/contact'
import { Edit } from '@/components/services/photography/edit'
import { Feed } from '@/components/services/photography/feed'
import { Process } from '@/components/services/photography/process'

export default function Page() {
  return (
    <div className='mb-20 mt-28 lg:mb-32 lg:mt-32'>
      <Process />
      <Edit />
      <Feed />
      <Contact />
    </div>
  )
}
