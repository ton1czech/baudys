import { Contact } from '@/components/contact'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/projects'

export default function Page() {
  return (
    <main className='mt-28 space-y-20 lg:mt-32 lg:space-y-40'>
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
