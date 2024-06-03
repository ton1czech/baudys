'use client'

import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

export default function NotFound() {
  const { language } = useLanguage()

  return (
    <div className='mt-40 lg:mt-60 mb-20 lg:mb-32 grid place-content-center'>
      <img
        src='/logo.webp'
        alt='logo'
        className='max-w-[200px] mx-auto mb-10'
      />
      <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center'>
        {language === 'cs' && 'Stránka Nenalezena'}
        {language === 'en' && 'Not Found'}
      </h2>
      <Link href='/' className='underline text-center'>
        {language === 'cs' && 'Zpět Domů'}
        {language === 'en' && 'Return Home'}
      </Link>
    </div>
  )
}
