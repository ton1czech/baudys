'use client'

import { useLanguage } from '@/store/use-language'
import { Container } from '../container'
import Link from 'next/link'
import { Title } from '../title'
import { useCursor } from '@/store/use-cursor'
import { motion } from 'framer-motion'

export const About = () => {
  const { language } = useLanguage()
  const { setIsNotHovering, setIsHovering } = useCursor()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Who am I?' : 'Kdo jsem?'} />
      <div className='grid xl:grid-cols-2 gap-8 xl:gap-20'>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src='/home/about.webp'
          className='rounded-3xl'
          alt='photo of me'
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='sticky top-20 h-min'
        >
          <p className='md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-400 text-justify'>
            {language === 'en' && (
              <>
                I&apos;m just a young person who wants to make his dreams come
                true and I believe that programming is my future. In 2015, I
                started designing and photography 📸. I first encountered
                Programming 🖥️ in 2019 and was immediately hooked. Since then
                I&apos;ve managed to create dozens of projects, both for myself
                and for clients. Some of my favourites include my portfolio and{' '}
                <Link
                  href='https://planetopedia.agency'
                  target='_blank'
                  className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-purple-500 hover:text-purple-500 dark:hover:text-purple-500 transition font-bold dark:text-zinc-200 text-zinc-800'
                  onMouseEnter={setIsHovering}
                  onMouseLeave={setIsNotHovering}
                >
                  Planetopedia
                </Link>{' '}
                website. It is also worth mentioning that I have created several
                applications for the Pilsen Regional Office 👔, I have given
                educational lectures for children 🧑‍🏫 and I have successfully
                passed the Microsoft Office Specialist exams 📖 in PowerPoint 🟠
                and Word 🔵 at the bett 2023 event in London. When I&apos;m not
                sitting at the computer, I&apos;m doing street workout 💪 or
                working on cars 🏎️.
              </>
            )}
            {language === 'cs' && (
              <>
                Jsem jen mladý člověk, co si chce splnit svoje sny a věřím, že
                programování je moje budoucnost. V roce 2015 jsem začal s
                designem a fotografováním 📸. S Programováním 🖥 jsem se poprvé
                setkal v roce 2019 a hned mě to pohltilo. Od té doby jsem stihl
                vytvořit desítky projektů, ať už sám pro sebe, tak i pro
                klienty. Mezi mé nejoblíbenější patří moje portfolio a{' '}
                <Link
                  href='https://planetopedia.agency'
                  target='_blank'
                  className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-purple-500 hover:text-purple-500 dark:hover:text-purple-500 transition font-bold dark:text-zinc-200 text-zinc-800'
                >
                  Planetopedia
                </Link>
                . Za zmínku také stojí, že jsem vytvořil několik aplikací pro
                úřad plzeňského kraje 👔, vedl jsem výukové přednášky 🧑‍🏫 pro
                děti a také jsem úspěšně absolvoval Microsoft Office Specialist
                zkoušky 📖 z PowerPointu 🟠 a Wordu 🔵 na akci bett 2023 v
                Londýně. Když zrovna nesedím u počítače, tak cvičím street
                workout 💪 nebo pracuji na autech 🏎.
              </>
            )}
          </p>
        </motion.div>
      </div>
    </Container>
  )
}
