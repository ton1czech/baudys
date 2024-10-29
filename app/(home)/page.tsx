import { Contact } from '@/components/contact'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/projects'

export default function Page() {
  return (
    <main className='space-y-20 lg:space-y-40'>
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
