import { FC } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { MobileNavItem } from './mobile-nav-item'

interface MobileNavbarProps {
  setIsOpen: (bool: boolean) => void
}

export const MobileNavbar: FC<MobileNavbarProps> = ({ setIsOpen }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        transition: {
          duration: 0.5,
          ease: [0.12, 0, 0.39, 0],
        },
      }}
      exit={{
        scaleY: 0,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className='fixed inset-0 w-screen h-screen z-[99999] grid justify-between origin-top bg-background'
    >
      <X
        className='absolute top-6 right-6 text-white'
        onClick={() => setIsOpen(false)}
      />
      <motion.ul
        initial={{ y: 50, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ delay: 0.5 }}
        className='flex flex-col gap-6 absolute left-1/2 top-60 -translate-x-1/2'
      >
        <MobileNavItem
          label='Services'
          href='/services'
          setIsOpen={setIsOpen}
        />
        <MobileNavItem
          label='Projects'
          href='/projects'
          setIsOpen={setIsOpen}
        />
      </motion.ul>
    </motion.div>
  )
}
