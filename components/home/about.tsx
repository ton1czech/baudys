'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import { Title } from '../title'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LinkPreview } from '../ui/link-preview'

export const About = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <Title label={language === 'en' ? 'Who am I?' : 'Kdo jsem?'} />
      <div className='grid gap-4 md:gap-8 xl:grid-cols-2'>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src='/home/about.webp'
          alt='photo of me'
          className='rounded-3xl'
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='sticky top-24 h-min'
        >
          <p className='text-justify text-zinc-400 md:text-lg lg:text-xl'>
            {language === 'en' && (
              <>
                In 2015, I started designing and photography 📸. I first
                encountered Programming 🖥️ in 2019 and was immediately hooked.
                Since then I&apos;ve managed to create dozens of projects, both
                for myself and for clients. Some of my favourites include my
                portfolio and{' '}
                <LinkPreview
                  isStatic
                  url='https://rozmluv.se'
                  imageSrc='/projects/rozmluvse/macbook.webp'
                  className='font-semibold text-green-500'
                >
                  Rozmluv se
                </LinkPreview>{' '}
                website. It is also worth mentioning that I have created several
                applications for the Pilsen Regional Office in cooperation with
                Microsoft 👔, I have given educational lectures for children 🧑‍🏫
                and I have successfully passed the Microsoft Office Specialist
                exams 📖 in PowerPoint 🟠 and Word 🔵 at the bett 2023 event in
                London.
              </>
            )}
            {language === 'cs' && (
              <>
                V roce 2015 jsem začal s designem a fotografováním 📸. S
                Programováním 🖥 jsem se poprvé setkal v roce 2019 a hned mě to
                pohltilo. Od té doby jsem stihl vytvořit desítky projektů, ať už
                sám pro sebe, tak i pro klienty. Mezi mé nejoblíbenější patří
                moje portfolio a web{' '}
                <LinkPreview
                  isStatic
                  url='https://rozmluv.se'
                  imageSrc='/projects/rozmluvse/macbook.webp'
                  className='font-semibold text-green-500'
                >
                  Rozmluv se
                </LinkPreview>
                . Za zmínku také stojí, že jsem vytvořil několik aplikací pro
                úřad plzeňského kraje ve spolupráci s Microsoftem 👔, vedl jsem
                výukové přednášky 🧑‍🏫 pro děti a také jsem úspěšně absolvoval
                Microsoft Office Specialist zkoušky 📖 z PowerPointu 🟠 a Wordu
                🔵 na akci bett 2023 v Londýně.
              </>
            )}
          </p>
        </motion.div>
      </div>
    </Container>
  )
}
