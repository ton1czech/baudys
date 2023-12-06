'use client'

import { Contact } from '@/components/contact'
import { Everything } from '@/components/services/everything'
import { useCursor } from '@/store/useCursor'
import { useEffect } from 'react'

export default function Page() {
  const { setIsNotHovering, setType } = useCursor()

  useEffect(() => {
    setIsNotHovering()
    setType('')
  }, [])

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Everything />
      <Contact />
    </div>
  )
}
