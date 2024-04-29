import { Contact } from '@/components/contact'
import { About } from '@/components/home/about'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/projects'
import { Services } from '@/components/home/services'
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
