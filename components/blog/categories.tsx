'use client'

import { categories } from '@/database/categories'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export const Categories = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='mb-4'
    >
      <h3
        onClick={() => setIsOpen((prev) => !prev)}
        className='inline-flex cursor-pointer select-none items-center gap-1'
      >
        Categories
        <ChevronDown
          size={18}
          className={cn('transition', isOpen && 'rotate-180')}
        />
      </h3>
      {isOpen && (
        <div className='mt-2 flex gap-2'>
          {categories.map((category) => (
            <Link key={category} href={`/blog/${category}`}>
              <Button
                variant='category'
                className={cn(
                  '',
                  pathname.includes(category) && 'bg-white text-zinc-900',
                )}
              >
                {category}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  )
}
