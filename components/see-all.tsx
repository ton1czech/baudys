'use client'

import { useLanguage } from '@/store/use-language'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'

interface SeeAllProps {
  href: string
}

export const SeeAll: FC<SeeAllProps> = ({ href }) => {
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Link
        href={href}
        className='colorful-text relative flex items-center gap-2 text-lg font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:z-10 after:h-[3px] after:w-full after:scale-x-0 after:rounded-lg after:bg-purple-500 after:opacity-0 after:transition after:hover:scale-x-100 after:hover:opacity-100'
      >
        {language === 'en' && 'See All'}
        {language === 'cs' && 'Zobrazit Vše'}
        <ArrowRight className='h-5 w-5 stroke-sky-500' />
      </Link>
    </motion.div>
  )
}
