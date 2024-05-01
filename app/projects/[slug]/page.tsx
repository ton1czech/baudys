'use client'

import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { projects } from '@/database/projects'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TechnologiesCarousel } from '@/components/technologies-carousel/technologies-carousel'
import { Title } from '@/components/title'
import { ChevronRight } from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { language } = useLanguage()
  const { setIsNotHovering, setIsHovering, setType } = useCursor()

  const {
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
  }, [])

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container className='pb-40 lg:pb-60 xl:pb-80'>
        <p className='inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
          <Link
            onMouseEnter={() => {
              setIsHovering()
              setType('external')
            }}
            onMouseLeave={() => {
              setIsNotHovering()
              setType('')
            }}
            href='/projects'
            className='hover:underline'
          >
            {language === 'en' && 'projects'}
            {language === 'cs' && 'projekty'}
          </Link>
          <ChevronRight size={18} />
          <span className='font-bold'>{name}</span>
        </p>
        <div className='grid lg:grid-cols-[3fr_1fr] mb-10 lg:mb-20 xl:mb-32'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='flex flex-col lg:justify-center'
          >
            <div className='flex lg:gap-20 justify-between lg:justify-normal'>
              <div className='flex flex-col'>
                <h4 className='uppercase text-zinc-600 dark:text-zinc-400 font-medium'>
                  {language === 'en' && 'client'}
                  {language === 'cs' && 'klient'}
                </h4>
                <Link
                  href={url}
                  target='_blank'
                  className='underline text-2xl lg:text-3xl font-light'
                >
                  {name}
                </Link>
              </div>
              <div className='flex flex-col'>
                <h4 className='uppercase text-zinc-600 dark:text-zinc-400 font-medium'>
                  {language === 'en' && 'year'}
                  {language === 'cs' && 'rok'}
                </h4>
                <p className='text-2xl lg:text-3xl font-light'>{year}</p>
              </div>
            </div>

            <h1 className='hidden lg:block lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold mt-14 text-center md:text-left'>
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
            className='mt-10 lg:mt-0'
          />
        </div>

        <Title label={language === 'en' ? 'Showcase' : 'Ukázka'} />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src={macbook}
          alt={name}
          className='mb-10 lg:mb-20 -mt-10 lg:-mt-20'
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
