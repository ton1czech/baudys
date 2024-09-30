'use client'

import { motion, useScroll } from 'framer-motion'
import { FC, useRef } from 'react'

interface TimelineItemProps {
  step: string
  label: string
  body: string
  src: string
}

export const TimelineItem: FC<TimelineItemProps> = ({
  step,
  label,
  body,
  src,
}) => {
  const imageRef = useRef<HTMLImageElement>(null)

  const { scrollYProgress: scrollYImageProgress } = useScroll({
    target: imageRef,
    offset: ['0 1', '1 1'],
  })

  const ref = useRef<any>(null)

  const { scrollYProgress: scrollYColorProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  return (
    <li>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex-start flex items-center pt-3'
      >
        <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-600' />
        <motion.div
          ref={ref}
          style={{ opacity: scrollYColorProgress }}
          className='absolute z-10 -ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-purple-500'
        />
        <p className='absolute ml-3 text-sm text-zinc-400'>{step}</p>
        <motion.p
          ref={ref}
          style={{ opacity: scrollYColorProgress }}
          className='absolute ml-3 text-sm text-purple-500'
        >
          {step}
        </motion.p>
      </motion.div>
      <div className='mb-6 ml-4 mt-2'>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-3 text-xl font-semibold'
        >
          {label}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {body}
        </motion.p>
        <motion.img
          ref={imageRef}
          src={src}
          style={{ scale: scrollYImageProgress, opacity: scrollYImageProgress }}
        />
      </div>
    </li>
  )
}
