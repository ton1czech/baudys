'use client'

import { cn } from '@/lib/utils'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { useGallery } from '@/store/use-gallery'

export const Categories = () => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()
  const { animals, cars, setAnimals, setCars } = useGallery()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h3
        onMouseEnter={setIsHovering}
        onMouseLeave={setIsNotHovering}
        onClick={() => setIsOpen(prev => !prev)}
        className='inline-flex gap-1 items-center select-none'
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
            onMouseEnter={setIsHovering}
            onMouseLeave={setIsNotHovering}
            onClick={setCars}
            variant='category'
            className={cn(cars && 'bg-white text-zinc-900')}
          >
            {language === 'en' && 'cars'}
            {language === 'cs' && 'auta'}
          </Button>
          <Button
            onMouseEnter={setIsHovering}
            onMouseLeave={setIsNotHovering}
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
  )
}
