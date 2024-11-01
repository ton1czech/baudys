'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import WordRotate from '../ui/word-rotate'
import Clock from 'react-live-clock'

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
            <span>
              (
              <Clock
                format={'HH:mm:ss'}
                ticking={true}
                timezone={'Europe/Prague'}
              />
              )
            </span>
          </p>
          <h1 className='text-5xl font-bold 2xl:text-6xl'>
            <WordRotate words={['Ahoj,', 'Hola,', 'Ahoy,', 'Ciao,']} />
            {language === 'en' && "I'm Daniel! 👋 "}
            {language === 'cs' && 'jsem Daniel! 👋 '}
          </h1>
          <p className='mt-2 max-w-[80ch] text-justify text-lg text-zinc-800 2xl:text-xl dark:text-zinc-200'>
            {language === 'cs' && (
              <>
                <b>Webový vývojář</b>, <b>programátor</b>, <b>fotograf</b> a{' '}
                <b>designer</b>. Rád spojuji technické dovednosti s kreativitou,
                abych vytvářel funkční a estetické projekty. Baví mě přinášet
                nápady k životu – jak v digitálním světě, tak skrze objektiv
                fotoaparátu.
              </>
            )}
            {language === 'en' && (
              <>
                <b>Web developer</b>, <b>programmer</b>, <b>photographer</b> and{' '}
                <b>designer</b>. I like to combine technical skills with
                creativity to create functional and aesthetic projects. I enjoy
                bringing ideas to life - both in the digital world and through
                the lens of a camera.
              </>
            )}
          </p>
        </div>
        <motion.img
          src='/home/hero.webp'
          alt='portrait photo'
          className='w-full rounded-full'
        />
      </Container>
    </section>
  )
}
