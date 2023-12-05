'use client'

import { useCursor } from '@/store/useCursor'
import { useLanguage } from '@/store/useLanguage'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface SeeAllProps {
  href: string
}

export const SeeAll: FC<SeeAllProps> = ({ href }) => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()

  return (
    <Link
      href={href}
      className='flex items-center gap-2 hover:text-purple-500 hover:underline'
      onMouseEnter={setIsHovering}
      onMouseLeave={setIsNotHovering}
    >
      {language === 'en' && 'See All'}
      {language === 'cs' && 'Zobrazit Vše'}
      <ArrowRight className='h-4 w-4' />
    </Link>
  )
}
