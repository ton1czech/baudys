'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'

interface ItemProps {
  label: string
}

const Item = ({ label }: ItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='rounded-lg border border-purple-500/50 bg-purple-500/10 p-2'
    >
      <p className='truncate whitespace-nowrap text-center text-lg text-zinc-200'>
        {label}
      </p>
    </motion.div>
  )
}

export const Options = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Options' : 'Možnosti'} />
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8'>
        <Item
          label={language === 'en' ? 'Ambient Lighting' : 'Ambientní Osvětlení'}
        />
        <Item
          label={language === 'en' ? 'Auto Start Stop' : 'Auto Start Stop'}
        />
        <Item
          label={
            language === 'en' ? 'Digital Speed (BC)' : 'Digitální Rychlost (BC)'
          }
        />
        <Item
          label={language === 'en' ? 'Seatbelt Reminder' : 'Bezpečnostní Pásy'}
        />
        <Item label={language === 'en' ? 'Audio' : 'Audio'} />
        <Item label={language === 'en' ? 'Battery Type' : 'Typ Baterie'} />
        <Item
          label={language === 'en' ? 'Daytime Running Light' : 'Denní Svícení'}
        />
        <Item
          label={language === 'en' ? 'Screen Layout' : 'Rozvržení Displeje'}
        />
        <Item label={language === 'en' ? 'Start Logo' : 'Startovní Logo'} />
        <Item
          label={
            language === 'en' ? 'Default Driving Mode' : 'Výchozí Jízdní Režim'
          }
        />
        <Item
          label={language === 'en' ? 'Low Fuel Warning' : 'Nízký Stav Paliva'}
        />
        <Item
          label={
            language === 'en'
              ? 'Automatic mirror tilt'
              : 'Automatické sklápění zrcátek'
          }
        />
        <Item
          label={language === 'en' ? 'Seat Heating' : 'Vyhřívání Sedadel'}
        />
        <Item
          label={language === 'en' ? 'Sport Display' : 'Sportovní Displej'}
        />
        <Item
          label={language === 'en' ? 'Video in Motion' : 'Video v Pohybu'}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='p-2 text-center text-lg text-zinc-200'
        >
          {language === 'en' && 'and much more...'}
          {language === 'cs' && 'a mnohem více...'}
        </motion.p>
      </div>
    </Container>
  )
}
