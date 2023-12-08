import { Contact } from '@/components/contact'
import { About } from '@/components/homepage/about'
import { Hero } from '@/components/homepage/hero'
import { Projects } from '@/components/homepage/projects'
import { Services } from '@/components/homepage/services'
import { TechnologiesCarousel } from '@/components/technologies-carousel/technologies-carousel'

export default function Page() {
  return (
    <main className='mb-20 lg:mb-32'>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechnologiesCarousel />
      <Contact />
    </main>
  )
}
