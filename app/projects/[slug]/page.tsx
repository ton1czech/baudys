'use client'

import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { projects } from '@/database/projects'
import { useCursor } from '@/store/useCursor'
import { useLanguage } from '@/store/useLanguage'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TechnologiesCarousel } from '@/components/technologies-carousel/technologies-carousel'

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { language } = useLanguage()
  const { setIsNotHovering, setIsHovering, setType } = useCursor()

  const { image, images, name, url, year } = projects.filter(
    (data: any) => data.slug === params.slug
  )[0]

  useEffect(() => {
    setIsNotHovering()
    setType('')
  }, [])

  const onMouseEnter = () => {
    setIsHovering()
    setType('external')
  }

  const onMouseLeave = () => {
    setIsNotHovering()
    setType('')
  }

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container className='pb-20 lg:pb-60 xl:pb-80'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='flex justify-between items-center mb-2'
        >
          <Link
            className='text-3xl md:text-4xl lg:text-5xl font-bold underline'
            href={url}
            target='_blank'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {name}
          </Link>
          <p className='font-light text-zinc-600 dark:text-zinc-400 italic text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            {year}
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src={image}
          alt={name}
          className='mb-32'
        />

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2'
        >
          {language === 'en' && 'Showcase'}
          {language === 'cs' && 'Ukázka'}
        </motion.h3>
        {images.map(image => (
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            key={image}
            src={image}
            alt='image'
            className='last:mb-0 mb-10 lg:mb-20'
          />
        ))}
      </Container>
      <TechnologiesCarousel />
      <Contact />
    </div>
  )
}
