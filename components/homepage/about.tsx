'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import Link from 'next/link'
import { Title } from '../title'
import { useCursor } from '@/store/useCursor'
import { motion } from 'framer-motion'

export const About = () => {
  const { language } = useLanguage()
  const { setIsNotHovering, setIsHovering } = useCursor()

  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Who am I?' : 'Kdo jsem?'} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='grid xl:grid-cols-2 gap-8 xl:gap-20'
      >
        <div>
          <img src='/me.webp' className='rounded-3xl' alt='photo of me' />
        </div>

        <div className='sticky top-20 h-min'>
          <p className='md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-400 text-justify'>
            {language === 'en' && (
              <>
                I&apos;m just a young kid who wants to make his dreams come true
                and I believe that programming 💻 will lead me to it one day. In
                2015, I started designing and photography 📸. I first
                encountered Programming 🖥️ in 2019 and was immediately hooked.
                Since then I&apos;ve managed to create dozens of projects, both
                for myself and for clients. Some of my favourites include the{' '}
                <Link
                  href='https://planetopedia.agency'
                  target='_blank'
                  className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-purple-500 hover:text-purple-500 dark:hover:text-purple-500 transition font-bold dark:text-zinc-200 text-zinc-800'
                  onMouseEnter={setIsHovering}
                  onMouseLeave={setIsNotHovering}
                >
                  Planetopedia
                </Link>{' '}
                website (where I&apos;m also a member in the programming
                division) and graphing{' '}
                <Link
                  href='https://inflace-cr.streamlit.app/'
                  target='_blank'
                  className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-purple-500 hover:text-purple-500 dark:hover:text-sky-500 transition font-bold dark:text-zinc-200 text-zinc-800'
                  onMouseEnter={setIsHovering}
                  onMouseLeave={setIsNotHovering}
                >
                  inflation
                </Link>{' '}
                data in the Czech Republic. It is also worth mentioning that I
                have created several applications for the Pilsen Regional Office
                👔, I have given educational lectures for children 🧑‍🏫 and I have
                successfully passed the Microsoft Office Specialist exams 📖 in
                PowerPoint 🟠 and Word 🔵 at the bett 2023 event in London.
              </>
            )}
            {language === 'cs' && (
              <>
                Jsem jen mladý kluk, co si chce splnit svoje sny a věřím, že
                programování 💻 mě k tomu jednou dovede. V roce 2015 jsem začal
                s designem a fotografováním 📸. S Programováním 🖥 jsem se poprvé
                setkal v roce 2019 a hned mě to pohltilo. Od té doby jsem stihl
                vytvořit desítky projektů, ať už sám pro sebe, tak i pro
                klienty. Mezi mé nejoblíbenější patří web{' '}
                <Link
                  href='https://planetopedia.agency'
                  target='_blank'
                  className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-purple-500 hover:text-purple-500 dark:hover:text-purple-500 transition font-bold dark:text-zinc-200 text-zinc-800'
                >
                  Planetopedia
                </Link>{' '}
                (kde jsem také členem v programátorské divizi) a grafické
                zpracování dat{' '}
                <Link
                  href='https://inflace-cr.streamlit.app/'
                  target='_blank'
                  className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-sky-500 hover:text-sky-500 dark:hover:text-sky-500 transition font-bold dark:text-zinc-200 text-zinc-800'
                >
                  inflace
                </Link>{' '}
                v České republice. Za zmínku také stojí, že jsem vytvořil
                několik aplikací pro úřad plzeňského kraje 👔, vedl jsem výukové
                přednášky 🧑‍🏫 pro děti a také jsem úspěšně absolvoval Microsoft
                Office Specialist zkoušky 📖 z PowerPointu 🟠 a Wordu 🔵 na akci
                bett 2023 v Londýně.
              </>
            )}
          </p>
        </div>
      </motion.div>
    </Container>
  )
}
