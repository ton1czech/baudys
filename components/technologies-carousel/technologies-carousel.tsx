'use client'

import { Container } from '../container'
import { motion } from 'framer-motion'
import { Logos } from './logos'
import { useLanguage } from '@/store/use-language'
import { Title } from '../title'

export const TechnologiesCarousel = () => {
  const { language } = useLanguage()

  return (
    <div className='relative z-10 overflow-hidden pb-40 lg:pb-60 xl:pb-80'>
      <Container>
        <Title label={language === 'en' ? 'I use' : 'Používám'} />
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Logos />
      </motion.div>
    </div>
  )
}
