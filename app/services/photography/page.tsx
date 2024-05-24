import { Contact } from '@/components/contact'
import { Feed } from '@/components/services/photography/feed'
import { Process } from '@/components/services/photography/process'
import { TechnologiesCarousel } from '@/components/technologies-carousel/technologies-carousel'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Process />
      <Feed />
      <TechnologiesCarousel />
      <Contact />
    </div>
  )
}
