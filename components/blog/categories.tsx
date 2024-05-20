'use client'

import { categories } from '@/database/categories'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const Cateogries = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h3
        onClick={() => setIsOpen(prev => !prev)}
        className='inline-flex gap-1 items-center select-none cursor-pointer'
      >
        Categories
        <ChevronDown
          size={18}
          className={cn('transition', isOpen && 'rotate-180')}
        />
      </h3>
      {isOpen && (
        <div className='mt-2 flex gap-2'>
          {categories.map(category => (
            <Link href={`/blog/${category}`}>{category}</Link>
          ))}
        </div>
      )}
    </div>
  )
}
