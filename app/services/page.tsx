import { Contact } from '@/components/contact'
import { Everything } from '@/components/services/everything'
import { Services } from '@/components/services/services'

export default function Page() {
  return (
    <div className='mt-28 space-y-20 lg:mt-32 lg:space-y-40'>
      <Services />
      <Everything />
      <Contact />
    </div>
  )
}
