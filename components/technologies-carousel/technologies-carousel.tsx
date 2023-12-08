'use client'

import { Container } from '../container'
import { motion } from 'framer-motion'
import { Logos } from './logos'
import { useLanguage } from '@/store/useLanguage'
import { Title } from '../title'

export const TechnologiesCarousel = () => {
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='relative z-10 overflow-hidden pb-20 lg:pb-60 xl:pb-80'
    >
      <Container>
        <Title
          label={
            language === 'en'
              ? 'The Technologies I Use'
              : 'Technologie, Které Používám'
          }
        />
      </Container>
      <Logos />
    </motion.div>
  )
}
