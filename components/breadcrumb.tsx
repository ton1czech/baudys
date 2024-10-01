'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BreadcrumbProps {
  base: string
  url: string
  current: string
}

export const Breadcrumb = ({ base, url, current }: BreadcrumbProps) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='mb-4 inline-flex items-center gap-2 text-zinc-400'
    >
      <Link href={url} className='hover:underline'>
        {base}
      </Link>
      <ChevronRight size={18} />
      <span className='font-bold'>{current}</span>
    </motion.p>
  )
}
