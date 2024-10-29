'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface CursorProps {
  type: 'project' | 'external' | ''
  children: React.ReactNode
}

export const Cursor = ({ type, children }: CursorProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='!cursor-none'
    >
      {children}
      <div
        className='pointer-events-none fixed left-0 top-0 z-[9998] hidden sm:block'
        style={{
          height: isHovering ? 80 : 0,
          width: isHovering ? 80 : 0,
          opacity: isHovering ? 1 : 0,
          transform: `translate(${mousePosition.x - 40}px, ${mousePosition.y - 40}px)`,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        }}
      >
        {isHovering && (
          <div className='pointer-events-none absolute inset-0 z-[9999] grid h-full w-full place-content-center rounded-full border border-zinc-300/70 bg-zinc-800'>
            {type === 'project' && <ArrowRight className='stroke-white' />}
            {type === 'external' && <ExternalLink className='stroke-white' />}
          </div>
        )}
      </div>
    </div>
  )
}
