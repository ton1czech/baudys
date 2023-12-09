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
import { Title } from '@/components/title'

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { language } = useLanguage()
  const { setIsNotHovering, setIsHovering, setType } = useCursor()

  const {
    image,
    images,
    name,
    url,
    year,
    iphone,
    macbook,
    descriptionCs,
    descriptionEn,
  } = projects.filter((data: any) => data.slug === params.slug)[0]

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
        <div className='grid lg:grid-cols-[3fr_1fr] mb-10 lg:mb-20 xl:mb-32'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='grid place-content-center'
          >
            <div className='flex gap-20'>
              <div className='flex flex-col'>
                <h4 className='uppercase text-zinc-600 dark:text-zinc-400 font-medium'>
                  {language === 'en' && 'client'}
                  {language === 'cs' && 'klient'}
                </h4>
                <Link
                  href={url}
                  target='_blank'
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className='underline text-xl md:text-2xl lg:text-3xl font-light'
                >
                  {name}
                </Link>
              </div>
              <div className='flex flex-col'>
                <h4 className='uppercase text-zinc-600 dark:text-zinc-400 font-medium'>
                  {language === 'en' && 'year'}
                  {language === 'cs' && 'rok'}
                </h4>
                <p className='text-xl md:text-2xl lg:text-3xl font-light'>
                  {year}
                </p>
              </div>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold mt-14'>
              {language === 'en' && <>{descriptionEn}</>}
              {language === 'cs' && <>{descriptionCs}</>}
            </h1>
          </motion.div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            src={iphone}
            alt={name}
          />
        </div>

        <Title label={language === 'en' ? 'Showcase' : 'Ukázka'} />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src={macbook}
          alt={name}
          className='mb-10 lg:mb-20 -mt-20'
        />
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
