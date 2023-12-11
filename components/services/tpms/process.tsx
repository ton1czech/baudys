'use client'

import { Container } from '@/components/container'
import { ProcessItem } from './process-item'
import { useLanguage } from '@/store/useLanguage'

export const Process = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80 space-y-8 lg:space-y-20 xl:space-y-40'>
      <ProcessItem
        align='right'
        label={language === 'en' ? 'Installation' : 'Montáž'}
        body={
          language === 'en'
            ? 'Physically fitting smart valves is the first step to optimising your vehicle. With an emphasis on precision and quality workmanship, I will ensure the seamless installation of these valves to maintain the safety and performance of your tires.'
            : 'Fyzické namontování chytrých ventilků je prvním krokem k optimalizaci vašeho vozidla. S důrazem na preciznost a kvalitu provedení se postarám o bezproblémovou instalaci těchto ventilků, aby byla zachována bezpečnost a výkon vašich pneumatik.'
        }
        img='/services/tpms/process/1.webp'
      />
      <ProcessItem
        align='left'
        label={language === 'en' ? 'Programming' : 'Programování'}
        body={
          language === 'en'
            ? 'The programming of smart valves is crucial for their optimal function in a particular vehicle. Using diagnostic tools and expertise, I will perform detailed programming of the valves to ensure they are fully compatible with your vehicle and ensure the correct functioning of the tire pressure monitoring system.'
            : 'Programování chytrých ventilků je klíčové pro jejich optimální funkci v konkrétním vozidle. S využitím diagnostických nástrojů a odborných znalostí provedu detailní programování ventilků tak, aby byly plně kompatibilní s vaším vozidlem a zajistily správné fungování systému sledování tlaku v pneumatikách.'
        }
        img='/services/tpms/process/2.webp'
      />
      <ProcessItem
        align='right'
        label={language === 'en' ? 'Linking to' : 'Propojení'}
        body={
          language === 'en'
            ? 'The connection between the vehicle and the smart valves is essential for efficient operation. Using diagnostic methods and a precision approach, I will ensure seamless communication between your car and the smart valves, allowing for proper and efficient tire pressure monitoring to ensure your safety on the road.'
            : 'Propojení mezi vozidlem a chytrými ventilkami je nezbytné pro efektivní fungování. Pomocí diagnostických metod a precizního přístupu zajistím bezproblémovou komunikaci mezi vaším vozem a chytrými ventilkami, což umožní správné a účinné sledování tlaku v pneumatikách pro zajištění vaší bezpečnosti na silnici.'
        }
        img='/services/tpms/process/3.webp'
      />
    </Container>
  )
}
