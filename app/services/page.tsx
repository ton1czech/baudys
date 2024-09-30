'use client'

import { Contact } from '@/components/contact'
import { Everything } from '@/components/services/everything'
import { Services } from '@/components/services/services'
import { useCursor } from '@/store/use-cursor'
import { useEffect } from 'react'

export default function Page() {
  const { setIsNotHovering } = useCursor()

  useEffect(() => {
    setIsNotHovering()
  }, [])

  return (
    <div className='mb-20 mt-28 lg:mb-32 lg:mt-32'>
      <Services />
      <Everything />
      <Contact />
    </div>
  )
}
