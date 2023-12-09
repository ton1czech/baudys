'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { Title } from '../title'
import { projects } from '@/database/projects'
import { Project } from '../project'
import { SeeAll } from './see-all'
import { motion } from 'framer-motion'

export const Projects = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Projects' : 'Projekty'} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='grid lg:grid-cols-2 gap-20'
      >
        {projects.slice(0, 2).map(({ name, year, image, href }) => (
          <Project
            key={href}
            name={name}
            year={year}
            image={image}
            href={href}
          />
        ))}
      </motion.div>

      <div className='flex justify-center mt-10'>
        <SeeAll href='/projects' />
      </div>
    </Container>
  )
}
