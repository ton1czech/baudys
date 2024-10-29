import { Contact } from '@/components/contact'
import { Gallery } from '@/components/home/gallery'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'

export default function Page() {
  return (
    <main className='mt-28 space-y-20 lg:mt-32 lg:space-y-40'>
      <Hero />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  )
}
