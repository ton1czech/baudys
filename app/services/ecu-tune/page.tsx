'use client'

import { Contact } from '@/components/contact'
import { Intro } from '@/components/services/ecu-tune/intro'
import { Options } from '@/components/services/ecu-tune/options'
import { Supported } from '@/components/services/ecu-tune/supported'

export default function Page() {
  return (
    <div className='space-y-20 lg:space-y-40'>
      <Intro />
      <Supported />
      <Options />
      <Contact />
    </div>
  )
}
