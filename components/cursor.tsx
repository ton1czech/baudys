'use client'

import { useEffect, useState } from 'react'
import { useCursor } from '@/store/use-cursor'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const Cursor = () => {
  const { isHovering, type } = useCursor()

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div
      className='pointer-events-none fixed left-0 top-0 z-[9998] hidden h-0 w-0 sm:block'
      style={{
        height: isHovering ? 80 : 0,
        width: isHovering ? 80 : 0,
        opacity: isHovering ? 1 : 0,
        transform: isHovering
          ? `translate(${mousePosition.x - 40}px, ${mousePosition.y - 40}px)`
          : `translate(${mousePosition.x}px, ${mousePosition.y - 40}px)`,
      }}
    >
      {isHovering && type === 'project' && (
        <div className='pointer-events-none absolute inset-0 z-[9999] grid h-full w-full place-content-center rounded-full border border-zinc-300/70 bg-zinc-800'>
          <ArrowRight className='stroke-white' />
        </div>
      )}
      {isHovering && type === 'external' && (
        <div className='pointer-events-none absolute inset-0 z-[9999] grid h-full w-full place-content-center rounded-full border border-zinc-300/70 bg-zinc-800'>
          <ExternalLink className='stroke-white' />
        </div>
      )}
    </div>
  )
}
