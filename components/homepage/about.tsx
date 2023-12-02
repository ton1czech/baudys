'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import Link from 'next/link'

export const About = () => {
  const { language } = useLanguage()

  return (
    <Container className='grid grid-cols-2 gap-20 min-h-screen'>
      <div>
        <img src='/me.webp' className='rounded-3xl' />
      </div>
      <div>
        <h3 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6'>
          Who am I?
        </h3>
        <p className='text-lg lg:text-xl mb-8 text-zinc-700 dark:text-zinc-400 text-justify'>
          {language === 'en' && (
            <>
              I'm just a young kid who wants to make his dreams come true and I
              believe that programming 💻 will lead me to it one day. In 2015, I
              started designing and photography 📸. I first encountered
              Programming 🖥️ in 2019 and was immediately hooked. Since then I've
              managed to create dozens of projects, both for myself and for
              clients. Some of my favourites include the{' '}
              <Link
                href='https://planetopedia.agency'
                target='_blank'
                className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-purple-500 hover:text-purple-500 transition'
              >
                Planetopedia
              </Link>{' '}
              website (where I'm also a member in the programming division) and
              graphing{' '}
              <Link
                href='https://inflace-cr.streamlit.app/'
                target='_blank'
                className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-sky-500 hover:text-sky-500 transition'
              >
                inflation
              </Link>{' '}
              data in the Czech Republic. It is also worth mentioning that I
              have created several applications for the Pilsen Regional Office
              👔, I have given educational lectures for children 🧑‍🏫 and I have
              successfully passed the Microsoft Office Specialist exams 📖 in
              PowerPoint 🟠 and Word 🔵 at the bett 2023 event in London 🇬🇧.
            </>
          )}
          {language === 'cs' && (
            <>
              Jsem jen mladý kluk, co si chce splnit svoje sny a věřím, že
              programování 💻 mě k tomu jednou dovede. V roce 2015 jsem začal s
              designem a fotografováním 📸. S Programováním 🖥 jsem se poprvé
              setkal v roce 2019 a hned mě to pohltilo. Od té doby jsem stihl
              vytvořit desítky projektů, ať už sám pro sebe, tak i pro klienty.
              Mezi mé nejoblíbenější patří web{' '}
              <Link
                href='https://planetopedia.agency'
                target='_blank'
                className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-purple-500 hover:text-purple-500 transition'
              >
                Planetopedia
              </Link>{' '}
              (kde jsem také členem v programátorské divizi) a grafické
              zpracování dat{' '}
              <Link
                href='https://inflace-cr.streamlit.app/'
                target='_blank'
                className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-sky-500 hover:text-sky-500 transition'
              >
                inflace
              </Link>{' '}
              v České republice. Za zmínku také stojí, že jsem vytvořil několik
              aplikací pro úřad plzeňského kraje 👔, vedl jsem výukové přednášky
              🧑‍🏫 pro děti a také jsem úspěšně absolvoval Microsoft Office
              Specialist zkoušky 📖 z PowerPointu 🟠 a Wordu 🔵 na akci bett
              2023 v Londýně 🇬🇧.
            </>
          )}
        </p>

        <p className='text-lg lg:text-xl text-zinc-700 dark:text-zinc-400 text-justify'>
          {language === 'en' && (
            <>
              When I'm not sitting at the computer, I'm fixing 🔧 or tuning
              cars, which I've loved since I was a kid 👶. My favourite cars are
              German 🇩🇪 and Japanese 🇯🇵. Since 2016 I have been intermittently
              doing fitness 🏋️, especially street workout, calisthenics and
              street lifting (although I don't look like it right now 😢)
            </>
          )}
          {language === 'cs' && (
            <>
              Když zrovna nesedím u počítače, tak opravuji 🔧 nebo tuním auta
              🏎️, které miluji již od malička 👶. Nejraději mám Německé 🇩🇪 a
              Japonské 🇯🇵 vozy. Od roku 2016 se s přestávkami věnuji fitness 🏋️,
              především street workoutu, calisthenice a street liftingu (i když
              na to zrovna teď nevypadám 😢)
            </>
          )}
        </p>
      </div>
    </Container>
  )
}
