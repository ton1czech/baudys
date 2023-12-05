import { About } from '@/components/homepage/about'
import { Hero } from '@/components/homepage/hero'
import { Projects } from '@/components/homepage/projects'
import { Services } from '@/components/homepage/services'

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  )
}
