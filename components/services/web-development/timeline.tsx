'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { useLanguage } from '@/store/useLanguage'
import { motion } from 'framer-motion'

export const Timeline = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title
        label={
          language === 'en' ? 'collaboration timeline' : 'průběh spolupráce'
        }
      />
      <ol className='border-l-2 border-zinc-400 dark:border-zinc-600 space-y-20 lg:space-y-32 max-w-[80ch] mx-auto'>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className='flex-start flex items-center pt-3'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 dark:bg-zinc-600' />
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>
              {language === 'en' && '1st week'}
              {language === 'cs' && '1. týden'}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <h3 className='mb-3 font-semibold text-xl'>
              {language === 'en' && 'Embarking on Visual Foundations'}
              {language === 'cs' && 'Začínáme s vizuálním základem'}
            </h3>
            <p>
              {language === 'en' &&
                "In the first week, we'll focus on creating the fundamental structure and design of the website. Creativity meets functionality as we craft a visual identity that captivates and engages visitors."}
              {language === 'cs' &&
                ' V prvním týdnu se společně zaměříme na vytvoření základní struktury a designu webu. Kreativita se setká s funkcionalitou, abychom vytvořili vizuální podobu, která bude zaujímat a lákat návštěvníky.'}
            </p>
            <img src='/services/web-development/timeline/1.webp' />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className='flex-start flex items-center pt-3'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 dark:bg-zinc-600' />
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>
              {language === 'en' && '2nd week'}
              {language === 'cs' && '2. týden'}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <h3 className='mb-3 font-semibold text-xl'>
              {language === 'en' && 'Content Shapes Form and Purpose'}
              {language === 'cs' && 'Obsah plní formu a smysl'}
            </h3>
            <p>
              {language === 'en' &&
                "The second week is dedicated to populating the website with content that is not only visually appealing but also conveys crucial information. Together, we'll work on texts, images, and other elements to give the content meaning and value."}
              {language === 'cs' &&
                'Druhý týden bude věnován naplnění obsahu, který bude nejen esteticky působivý, ale bude také sdělovat důležité informace. Společně pracujeme na textech, obrázcích a dalších prvcích, které dodají obsahu webu jeho význam a hodnotu.'}
            </p>
            <img src='/services/web-development/timeline/2.webp' />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className='flex-start flex items-center pt-3'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 dark:bg-zinc-600' />
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>
              {language === 'en' && '3rd week'}
              {language === 'cs' && '3. týden'}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <h3 className='mb-3 font-semibold text-xl'>
              {language === 'en' && 'Finetuning for a Flawless Impression'}
              {language === 'cs' && 'Ladění pro dokonalý dojem'}
            </h3>
            <p>
              {language === 'en' &&
                "The third week focuses on refining details and making subtle adjustments. We'll pay attention to every minor tweak to ensure the website exudes professionalism and aligns precisely with your vision."}
              {language === 'cs' &&
                'Třetí týden se zaměříme na detaily a jemné úpravy. Věnujeme se všem drobným úpravám, které zajistí, že web bude působit profesionálně a přesně podle vašich představ.'}
            </p>
            <img src='/services/web-development/timeline/3.webp' />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className='flex-start flex items-center pt-3'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 dark:bg-zinc-600' />
            <p className='text-sm text-zinc-600 dark:text-zinc-400'>
              {language === 'en' && '4th week'}
              {language === 'cs' && '4. týden'}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <h3 className='mb-3 font-semibold text-xl'>
              {language === 'en' && 'When Vision Becomes Reality'}
              {language === 'cs' && 'Když se vize stane skutečností'}
            </h3>
            <p>
              {language === 'en' &&
                "The final week is dedicated to final preparations for launching the website. We'll review all elements to ensure your website is ready for deployment and poised to welcome your visitors."}
              {language === 'cs' &&
                'Poslední týden je věnován finálním přípravám k spuštění webu. Zkontrolujeme všechny prvky, abychom zajistili, že váš web je připraven k uvedení do provozu a k přivítání vašich návštěvníků.'}
            </p>
            <img src='/services/web-development/timeline/4.webp' />
          </div>
        </motion.li>
      </ol>
    </Container>
  )
}
