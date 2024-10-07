import { Contact } from '@/components/contact'
import { Categories } from '@/components/gallery/categories'
import { Gallery } from '@/components/gallery/gallery'
import { Hero } from '@/components/gallery/hero'

export default function Page() {
  return (
    <div className='space-y-20 lg:space-y-40'>
      <Hero />
      <div>
        <Categories />
        <Gallery />
      </div>
      <Contact />
    </div>
  )
}
