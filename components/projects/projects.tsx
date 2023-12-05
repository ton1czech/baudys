'use client'

import { projects } from '@/database/projects'
import { Container } from '../container'
import { Project } from '../project'
import { motion } from 'framer-motion'

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Container className='grid lg:grid-cols-2 gap-20 pb-20 lg:pb-60 xl:pb-80'>
        {projects.map(({ name, year, image, href }) => (
          <Project
            key={href}
            name={name}
            year={year}
            image={image}
            href={href}
          />
        ))}
      </Container>
    </motion.div>
  )
}
