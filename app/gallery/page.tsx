import { Container } from '@/components/container'
import { Photo } from '@/components/gallery/photo'
import { gallery } from '@/database/gallery'

export default function GalleryPage() {
  function seedRandom(seed: number) {
    // Creates a seeded pseudo-random number generator
    let m = 0x80000000, // 2**31
      a = 1103515245,
      c = 12345

    seed = seed % m

    return function () {
      seed = (a * seed + c) % m
      return seed / m
    }
  }

  function shuffle(array: string[], seed: number) {
    let random = seedRandom(seed)

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }

    return array
  }

  const seed = 1111
  const shuffledGallery = shuffle([...gallery], seed)

  const totalItems = shuffledGallery.length
  const itemsPer2Column = Math.ceil(totalItems / 2)
  const itemsPer3Column = Math.ceil(totalItems / 3)

  return (
    <main className='mt-28 lg:mt-32'>
      <Container>
        <div className='grid grid-cols-2 gap-2 md:hidden'>
          <div className='flex flex-col gap-2'>
            {shuffledGallery.slice(0, itemsPer2Column).map((item) => (
              <Photo key={item} photo={item} />
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {shuffledGallery.slice(itemsPer2Column).map((item) => (
              <Photo key={item} photo={item} />
            ))}
          </div>
        </div>

        <div className='hidden grid-cols-3 gap-6 md:grid'>
          <div className='flex flex-col gap-6'>
            {shuffledGallery.slice(0, itemsPer3Column).map((item) => (
              <Photo key={item} photo={item} />
            ))}
          </div>
          <div className='flex flex-col gap-6'>
            {shuffledGallery
              .slice(itemsPer3Column, itemsPer3Column * 2)
              .map((item) => (
                <Photo key={item} photo={item} />
              ))}
          </div>
          <div className='flex flex-col gap-6'>
            {shuffledGallery
              .slice(itemsPer3Column * 2, itemsPer3Column * 3)
              .map((item) => (
                <Photo key={item} photo={item} />
              ))}
          </div>
        </div>
      </Container>
    </main>
  )
}
