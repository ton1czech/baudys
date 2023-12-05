'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export const LenisProvider = () => {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e: any) => {
      console.log(e)
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}
