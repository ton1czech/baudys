'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const [cursorVariant, setCursorVariant] = useState('default')

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
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'yellow',
    },
  }

  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')

  return (
    <>
      <motion.div
        className='w-4 h-4 rounded-full bg-black fixed top-0 left-0 pointer-events-none z-[9999]'
        variants={variants}
        transition={{ delay: 0, duration: 0 }}
        animate={cursorVariant}
      />
    </>
  )
}
