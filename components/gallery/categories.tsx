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
  const { animals, cars, setAnimals, setCars } = useGallery()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container className='flex justify-between mb-10'>
      <div>
        <h3
          onClick={() => setIsOpen(prev => !prev)}
          className='inline-flex gap-1 items-center select-none cursor-pointer'
        >
          {language === 'en' && 'Categories'}
          {language === 'cs' && 'Kategorie'}
          <ChevronDown
            size={18}
            className={cn('transition', isOpen && 'rotate-180')}
          />
        </h3>
        {isOpen && (
          <div className='mt-2 flex gap-2'>
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
          </div>
        )}
      </div>
    </Container>
  )
}
