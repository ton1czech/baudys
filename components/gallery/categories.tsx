'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { useGallery } from '@/store/use-gallery'
import { Container } from '../container'

export const Categories = () => {
  const { language } = useLanguage()
  const {
    animals,
    cars,
    events,
    fitness,
    nature,
    monuments,
    setAnimals,
    setCars,
    setEvents,
    setFitness,
    setNature,
    setMonuments,
  } = useGallery()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container className='mb-10 flex justify-between'>
      <div>
        <h3
          onClick={() => setIsOpen((prev) => !prev)}
          className='inline-flex cursor-pointer select-none items-center gap-1'
        >
          {language === 'en' && 'Categories'}
          {language === 'cs' && 'Kategorie'}
          <ChevronDown
            size={18}
            className={cn('transition', isOpen && 'rotate-180')}
          />
        </h3>
        {isOpen && (
          <div className='mt-2 flex flex-wrap gap-2'>
            <Button
              onClick={setCars}
              variant='category'
              className={cn(cars && 'bg-white text-zinc-900')}
            >
              {language === 'en' && 'cars'}
              {language === 'cs' && 'auta'}
            </Button>
            <Button
              onClick={setAnimals}
              variant='category'
              className={cn(animals && 'bg-white text-zinc-900')}
            >
              {language === 'en' && 'animals'}
              {language === 'cs' && 'zvířata'}
            </Button>
            <Button
              onClick={setEvents}
              variant='category'
              className={cn(events && 'bg-white text-zinc-900')}
            >
              {language === 'en' && 'events'}
              {language === 'cs' && 'akce'}
            </Button>
            <Button
              onClick={setFitness}
              variant='category'
              className={cn(fitness && 'bg-white text-zinc-900')}
            >
              {language === 'en' && 'fitness'}
              {language === 'cs' && 'fitness'}
            </Button>
            <Button
              onClick={setNature}
              variant='category'
              className={cn(nature && 'bg-white text-zinc-900')}
            >
              {language === 'en' && 'nature'}
              {language === 'cs' && 'příroda'}
            </Button>
            <Button
              onClick={setMonuments}
              variant='category'
              className={cn(monuments && 'bg-white text-zinc-900')}
            >
              {language === 'en' && 'monuments'}
              {language === 'cs' && 'památky'}
            </Button>
          </div>
        )}
      </div>
    </Container>
  )
}
