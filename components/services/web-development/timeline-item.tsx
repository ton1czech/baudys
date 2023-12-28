'use client'

import { motion, useScroll } from 'framer-motion'
import { FC, useRef } from 'react'

interface TimelineItemProps {
  week: string
  label: string
  body: string
  src: string
}

export const TimelineItem: FC<TimelineItemProps> = ({
  week,
  label,
  body,
  src,
}) => {
  const ref = useRef<HTMLImageElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  })

  return (
    <li>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex-start flex items-center pt-3'
      >
        <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 dark:bg-zinc-600' />
        <p className='text-sm text-zinc-600 dark:text-zinc-400'>{week}</p>
      </motion.div>
      <div className='mb-6 ml-4 mt-2'>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-3 font-semibold text-xl'
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
          ref={ref}
          src={src}
          style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        />
      </div>
    </li>
  )
}
