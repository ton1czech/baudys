import { Contact } from '@/components/contact'
import { Process } from '@/components/services/tpms/process'

export default function Page() {
  return (
    <div className='space-y-20 lg:space-y-40'>
      <Process />
      <Contact />
    </div>
  )
}
