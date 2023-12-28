'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { useLanguage } from '@/store/useLanguage'
import { TimelineItem } from './timeline-item'

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
        <TimelineItem
          week={language === 'en' ? '1st week' : '1. týden'}
          label={
            language === 'en'
              ? 'Embarking on Visual Foundations'
              : 'Začínáme s vizuálním základem'
          }
          body={
            language === 'en'
              ? "In the first week, we'll focus on creating the fundamental structure and design of the website. Creativity meets functionality as we craft a visual identity that captivates and engages visitors."
              : 'V prvním týdnu se společně zaměříme na vytvoření základní struktury a designu webu. Kreativita se setká s funkcionalitou, abychom vytvořili vizuální podobu, která bude zaujímat a lákat návštěvníky.'
          }
          src='/services/web-development/timeline/1.webp'
        />
        <TimelineItem
          week={language === 'en' ? '2nd week' : '2. týden'}
          label={
            language === 'en'
              ? 'Content Shapes Form and Purpose'
              : 'Obsah plní formu a smysl'
          }
          body={
            language === 'en'
              ? "The second week is dedicated to populating the website with content that is not only visually appealing but also conveys crucial information. Together, we'll work on texts, images, and other elements to give the content meaning and value."
              : 'Druhý týden bude věnován naplnění obsahu, který bude nejen esteticky působivý, ale bude také sdělovat důležité informace. Společně pracujeme na textech, obrázcích a dalších prvcích, které dodají obsahu webu jeho význam a hodnotu.'
          }
          src='/services/web-development/timeline/2.webp'
        />
        <TimelineItem
          week={language === 'en' ? '3rd week' : '3. týden'}
          label={
            language === 'en'
              ? 'Finetuning for a Flawless Impression'
              : 'Ladění pro dokonalý dojem'
          }
          body={
            language === 'en'
              ? "The third week focuses on refining details and making subtle adjustments. We'll pay attention to every minor tweak to ensure the website exudes professionalism and aligns precisely with your vision."
              : 'Třetí týden se zaměříme na detaily a jemné úpravy. Věnujeme se všem drobným úpravám, které zajistí, že web bude působit profesionálně a přesně podle vašich představ.'
          }
          src='/services/web-development/timeline/3.webp'
        />
        <TimelineItem
          week={language === 'en' ? '4th week' : '4. týden'}
          label={
            language === 'en'
              ? 'When Vision Becomes Reality'
              : 'Když se vize stane skutečností'
          }
          body={
            language === 'en'
              ? "The final week is dedicated to final preparations for launching the website. We'll review all elements to ensure your website is ready for deployment and poised to welcome your visitors."
              : 'Poslední týden je věnován finálním přípravám k spuštění webu. Zkontrolujeme všechny prvky, abychom zajistili, že váš web je připraven k uvedení do provozu a k přivítání vašich návštěvníků.'
          }
          src='/services/web-development/timeline/4.webp'
        />
      </ol>
    </Container>
  )
}
