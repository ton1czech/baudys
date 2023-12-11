import { Contact } from '@/components/contact'
import { Process } from '@/components/services/tpms/process'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Process />
      <Contact />
    </div>
  )
}
