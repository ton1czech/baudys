'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '@/store/useCursor'

export const Cursor = () => {
  const { isHovering } = useCursor()

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
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    hover: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
  }

  return (
    <motion.div
      className='w-4 h-4 rounded-full bg-black dark:bg-white fixed top-0 left-0 pointer-events-none z-[9998]'
      variants={variants}
      transition={{ delay: 0, duration: 0.01 }}
      animate={isHovering ? 'hover' : 'default'}
    >
      {isHovering && (
        <div className='absolute grid place-content-center w-full h-full inset-0 z-[9999] transition duration-300'>
          <p className='text-white'>open</p>
        </div>
      )}
    </motion.div>
  )
}
