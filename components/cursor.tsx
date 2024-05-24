'use client'

import { useEffect, useState } from 'react'
import { useCursor } from '@/store/use-cursor'
import { ArrowRight, Camera, ExternalLink } from 'lucide-react'

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
      className='hidden sm:block w-0 h-0 fixed top-0 left-0 pointer-events-none z-[9998]'
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
        <div className='pointer-events-none rounded-full absolute grid place-content-center w-full h-full inset-0 z-[9999] border bg-zinc-200 border-zinc-700/70 dark:bg-zinc-800 dark:border-zinc-300/70'>
          <ArrowRight className='stroke-black dark:stroke-white' />
        </div>
      )}
      {isHovering && type === 'external' && (
        <div className='pointer-events-none rounded-full absolute grid place-content-center w-full h-full inset-0 z-[9999] border bg-zinc-200 border-zinc-700/70 dark:bg-zinc-800 dark:border-zinc-300/70'>
          <ExternalLink className='stroke-black dark:stroke-white' />
        </div>
      )}
      {isHovering && type === 'photography' && (
        <div className='pointer-events-none rounded-full absolute grid place-content-center w-full h-full inset-0 z-[9999] border bg-zinc-200 border-zinc-700/70 dark:bg-zinc-800 dark:border-zinc-300/70'>
          <Camera className='stroke-black dark:stroke-white' />
        </div>
      )}
    </div>
  )
}
