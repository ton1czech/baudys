import { Contact } from '@/components/contact'
import { About } from '@/components/home/about'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/projects'

export default function Page() {
  return (
    <main className='space-y-20 lg:space-y-40'>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
