'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

export const Intro = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-zinc-600 dark:text-zinc-400 !leading-tight font-medium'>
          {language === 'en' &&
            '"A high quality website is proof of credibility, professionalism and experience. It is your virtual business card that will tell your whole story from beginning to end."'}
          {language === 'cs' &&
            '"Kvalitní webová stránka je důkazem věrohodnosti, profesionality a zkušeností. Je to Vaše virtuální vizitka, který bude vyprávět celý Váš příběh od začátku až do konce."'}
        </h1>
        <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-zinc-500 italic mt-4'>
          ~ Daniel Anthony Baudyš
        </p>
      </motion.div>
    </Container>
  )
}
