'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import WordRotate from '../ui/word-rotate'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <section>
      <Container className='grid gap-10 md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='flex items-center gap-1 text-sm text-muted-foreground/80 md:text-base'>
            <MapPin className='size-5' />
            {language === 'cs' && 'Plzeňský kraj, Česká republika'}
            {language === 'en' && 'Pilsen region, Czech republic'}
          </p>
          <h1 className='text-5xl font-bold 2xl:text-6xl'>
            <WordRotate words={['Ahoj,', 'Hola,', 'Ahoy,', 'Ciao,']} />
            {language === 'en' && "I'm Daniel! 👋 "}
            {language === 'cs' && 'jsem Daniel! 👋 '}
          </h1>
          <p className='mt-2 max-w-[80ch] text-justify text-lg text-zinc-800 dark:text-zinc-200'>
            {language === 'cs' &&
              'Jsem webový vývojář, programátor, fotograf a designer. Rád spojuji technické dovednosti s kreativitou, abych vytvářel funkční a estetické projekty. Baví mě přinášet nápady k životu – jak v digitálním světě, tak skrze objektiv fotoaparátu.'}
            {language === 'en' &&
              'I am a web developer, programmer, photographer and designer. I like to combine technical skills with creativity to create functional and aesthetic projects. I enjoy bringing ideas to life - both in the digital world and through the lens of a camera.'}
          </p>
        </div>
        <motion.img
          src='/home/hero.webp'
          alt='portrait photo'
          className='rounded-full'
        />
      </Container>
    </section>
  )
}
