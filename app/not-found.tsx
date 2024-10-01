'use client'

import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

export default function NotFound() {
  const { language } = useLanguage()

  return (
    <div className='mb-20 mt-40 grid place-content-center lg:mb-32 lg:mt-60'>
      <img
        src='/logo.webp'
        alt='logo'
        className='mx-auto mb-10 max-w-[200px]'
      />
      <h2 className='text-center text-4xl font-bold sm:text-5xl lg:text-6xl'>
        {language === 'cs' && 'Stránka Nenalezena'}
        {language === 'en' && 'Not Found'}
      </h2>
      <Link href='/' className='text-center underline'>
        {language === 'cs' && 'Zpět Domů'}
        {language === 'en' && 'Return Home'}
      </Link>
    </div>
  )
}
