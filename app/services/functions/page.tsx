import { Contact } from '@/components/contact'
import { Intro } from '@/components/services/functions/intro'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Intro />
      <Contact />
    </div>
  )
}
