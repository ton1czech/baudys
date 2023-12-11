import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { useLanguage } from '@/store/useLanguage'

interface ItemProps {
  label: string
}

const Item = ({ label }: ItemProps) => {
  return (
    <div className='border border-purple-500/50 rounded-lg p-2 bg-purple-500/10'>
      <p className='text-lg text-zinc-800 dark:text-zinc-200 text-center'>
        {label}
      </p>
    </div>
  )
}

export const Options = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Options' : 'Nastavení'} />
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8'>
        <Item
          label={language === 'en' ? 'Ambient Lighting' : 'Ambientní Osvětlení'}
        />
        <Item label={language === 'en' ? 'Audio' : 'Audio'} />
        <Item
          label={language === 'en' ? 'Auto Start Stop' : 'Auto Start Stop'}
        />
        <Item label={language === 'en' ? 'Battery Type' : 'Typ Baterie'} />
        <Item
          label={language === 'en' ? 'Daytime Running Light' : 'Denní Svícení'}
        />
        <Item
          label={
            language === 'en' ? 'Digital Speed (BC)' : 'Digitální Rychlost (BC)'
          }
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
          label={
            language === 'en'
              ? 'Low Fuel Warning'
              : 'Upozornění na Nízký Stav Paliva'
          }
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
          label={
            language === 'en'
              ? 'Seatbelt Reminder'
              : 'Připomínka Bezpečnostních Pásů'
          }
        />
        <Item
          label={language === 'en' ? 'Sport Display' : 'Sportovní Displej'}
        />
        <Item
          label={language === 'en' ? 'Video in Motion' : 'Video v Pohybu'}
        />
        <p className='text-center p-2 text-lg text-zinc-800 dark:text-zinc-200'>
          {language === 'en' && 'and much more...'}
          {language === 'cs' && 'a mnohem více...'}
        </p>
      </div>
    </Container>
  )
}
