import { FC } from 'react'
import { Button } from '../ui/button'
import { useCursor } from '@/store/use-cursor'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'

interface ServiceProps {
  img: string
  label: string
  body: string
  href: string
  tag?: string
  tagLink?: string
  center?: boolean
}

export const Service: FC<ServiceProps> = ({
  img,
  label,
  body,
  href,
  tag,
  tagLink,
  center,
}) => {
  const { setIsHovering, setIsNotHovering, setType } = useCursor()
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='group'
    >
      <Link href={href} className='grid gap-4 lg:grid-cols-2 lg:gap-10'>
        <div className='relative aspect-video h-full w-full overflow-hidden rounded-lg'>
          <Image
            src={img}
            alt={label}
            fill
            className={cn(
              'rounded-lg object-cover transition duration-300 group-hover:scale-105',
              center ? 'object-center' : 'object-bottom',
            )}
          />
          {tag && (
            <p className='absolute bottom-2 right-2 rounded-md bg-zinc-700/50 px-2 py-1 text-sm text-white backdrop-blur-sm'>
              {tag}
              <Link
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => {
                  setIsHovering()
                  setType('external')
                }}
                onMouseLeave={() => {
                  setIsNotHovering()
                  setType('')
                }}
                href={`https://${tagLink}`}
                target='_blank'
                className='relative cursor-none font-bold underline'
              >
                {tagLink}
              </Link>
            </p>
          )}
        </div>

        <div className='grid place-content-center'>
          <h3 className='mb-1 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl'>
            {label}
          </h3>
          <p className='mb-6 text-justify text-zinc-400'>{body}</p>
          <Button variant='rainbow'>
            {language === 'en' && 'Learn More'}
            {language === 'cs' && 'Dozvědět se Více'}
          </Button>
        </div>
      </Link>
    </motion.div>
  )
}
