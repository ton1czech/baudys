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
    <div className='mt-28 space-y-20 lg:mt-32 lg:space-y-40'>
      <Services />
      <Everything />
      <Contact />
    </div>
  )
}
