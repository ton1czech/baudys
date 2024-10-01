'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'

export const Intro = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className='text-3xl font-medium !leading-tight text-zinc-400 md:text-4xl lg:text-5xl xl:text-6xl'>
          {language === 'en' &&
            '"A high quality website is proof of credibility, professionalism and experience. It is your virtual business card that will tell your whole story from beginning to end."'}
          {language === 'cs' &&
            '"Kvalitní webová stránka je důkazem věrohodnosti, profesionality a zkušeností. Je to Vaše virtuální vizitka, která bude vyprávět celý Váš příběh od začátku až do konce."'}
        </h1>
        <p className='mt-4 text-xl italic text-zinc-500 md:text-2xl lg:text-3xl xl:text-4xl'>
          ~ Daniel Anthony Baudyš
        </p>
      </motion.div>
    </Container>
  )
}
