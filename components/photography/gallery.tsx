'use client'

import { photography } from '@/database/photography'
import { Container } from '../container'
import Link from 'next/link'
import { useLanguage } from '@/store/use-language'
import { useCursor } from '@/store/use-cursor'

export const Gallery = () => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()

  return (
    <Container className='columns-4 space-y-4'>
      {photography.map(item => (
        <Link
          onMouseEnter={setIsHovering}
          onMouseLeave={setIsNotHovering}
          key={item.href}
          href={item.href}
          className='flex flex-col flex-nowrap'
        >
          <img src={item.images[0]} />
          <p className='text-sm text-zinc-700 dark:text-zinc-300'>
            {language === 'en' && item.labelEn}
            {language === 'cs' && item.labelCs}
          </p>
        </Link>
      ))}
    </Container>
  )
}
