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
        className='flex items-center gap-2 colorful-text text-lg font-semibold relative after:w-full after:h-[3px] after:bg-purple-500 after:-bottom-1 after:left-0 after:right-0 after:z-10 after:absolute after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:rounded-lg'
      >
        {language === 'en' && 'See All'}
        {language === 'cs' && 'Zobrazit Vše'}
        <ArrowRight className='h-5 w-5 stroke-sky-500' />
      </Link>
    </motion.div>
  )
}
