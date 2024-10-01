import { Contact } from '@/components/contact'
import { Edit } from '@/components/services/photography/edit'
import { Feed } from '@/components/services/photography/feed'
import { Process } from '@/components/services/photography/process'

export default function Page() {
  return (
    <div className='space-y-20 lg:space-y-40'>
      <Process />
      <Edit />
      <Feed />
      <Contact />
    </div>
  )
}
