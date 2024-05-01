'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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

  const variants = {
    base: {
      height: 0,
      width: 0,
      opacity: 0,
      x: mousePosition.x,
      y: mousePosition.y,
    },
    project: {
      height: 80,
      width: 80,
      opacity: 1,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
    external: {
      height: 80,
      width: 80,
      opacity: 1,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
    photography: {
      height: 80,
      width: 80,
      opacity: 1,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
  }

  return (
    <motion.div
      className='hidden sm:block w-0 h-0 opacity-0 rounded-full border bg-black border-white fixed top-0 left-0 pointer-events-none z-[9998]'
      variants={variants}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.12 }}
      animate={
        isHovering
          ? type === 'project'
            ? 'project'
            : type === 'external'
            ? 'external'
            : type === 'photography'
            ? 'photography'
            : ''
          : 'base'
      }
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
    </motion.div>
  )
}
