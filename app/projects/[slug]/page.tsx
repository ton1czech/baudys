'use client'

import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { projects } from '@/database/projects'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Title } from '@/components/title'
import { Breadcrumb } from '@/components/breadcrumb'
import { Cursor } from '@/components/cursor'

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { language } = useLanguage()

  const {
    images,
    name,
    url,
    year,
    iphone,
    macbook,
    descriptionEn,
    descriptionCs,
    featuresEn,
    featuresCs,
  } = projects.filter((data: any) => data.slug === params.slug)[0]

  return (
    <div>
      <Container className='pb-40 lg:pb-60 xl:pb-80'>
        <Breadcrumb
          base={language === 'en' ? 'projects' : 'projekty'}
          url='/projects'
          current={name}
        />

        <div className='mb-10 grid md:grid-cols-[3fr_1fr] lg:mb-20 xl:mb-32'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='flex flex-col md:justify-center'
          >
            <div className='flex justify-between md:justify-normal md:gap-20'>
              <div className='flex flex-col'>
                <h4 className='font-medium uppercase text-zinc-400'>
                  {language === 'en' && 'client'}
                  {language === 'cs' && 'klient'}
                </h4>
                <Cursor type='external'>
                  <Link
                    href={url}
                    target='_blank'
                    className='cursor-none text-2xl font-light underline lg:text-3xl'
                  >
                    {name}
                  </Link>
                </Cursor>
              </div>
              <div className='flex flex-col'>
                <h4 className='font-medium uppercase text-zinc-400'>
                  {language === 'en' && 'year'}
                  {language === 'cs' && 'rok'}
                </h4>
                <p className='text-2xl font-light lg:text-3xl'>{year}</p>
              </div>
            </div>

            <h1 className='mt-14 hidden text-center font-semibold md:text-left lg:block lg:text-6xl xl:text-7xl 2xl:text-8xl'>
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

        <Title label={language === 'en' ? 'Features' : 'Funkce'} />
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-10 text-xl sm:text-2xl lg:mb-20 lg:text-3xl xl:mb-32'
        >
          {language === 'en' &&
            featuresEn?.map((feature) => <li key={feature}>~ {feature}</li>)}
          {language === 'cs' &&
            featuresCs?.map((feature) => <li key={feature}>~ {feature}</li>)}
        </motion.ul>

        <Title label={language === 'en' ? 'Showcase' : 'Ukázka'} />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src={macbook}
          alt={name}
          className='mb-10'
        />
        {images.map((image) => (
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            key={image}
            src={image}
            alt='image'
            className='mb-10 last:mb-0 lg:mb-20'
          />
        ))}
      </Container>
      <Contact />
    </div>
  )
}
