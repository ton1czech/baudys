'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '@/store/useCursor'
import { ArrowRight, ExternalLink, FastForward } from 'lucide-react'
import { useLanguage } from '@/store/useLanguage'

export const Cursor = () => {
  const { isHovering, type } = useCursor()
  const { language } = useLanguage()

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
    default: {
      height: 16,
      width: 16,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    hover: {
      height: 24,
      width: 24,
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: '#a855f7',
    },
    project: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
    external: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
  }

  return (
    <motion.div
      className='hidden sm:block w-4 h-4 rounded-full border border-black bg-black dark:border-white dark:bg-white fixed top-0 left-0 pointer-events-none z-[9998]'
      variants={variants}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.19 }}
      animate={
        isHovering
          ? type === 'project'
            ? 'project'
            : type === 'external'
            ? 'external'
            : 'hover'
          : 'default'
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
    </motion.div>
  )
}
