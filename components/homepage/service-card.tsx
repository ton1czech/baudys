import { cn } from '@/lib/utils'
import { FC } from 'react'

interface ServiceCardProps {
  title: string
  body: string
  highlight?: boolean
}

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  body,
  highlight,
}) => {
  return (
    <div
      className={cn(
        'w-full p-8 bg-zinc-300/60 dark:bg-zinc-800/60 rounded-xl relative border border-transparent',
        highlight && 'border-yellow-500/50',
        !highlight && 'scale-95'
      )}
    >
      <h4
        className={cn(
          'text-center font-semibold mb-2 text-lg md:text-xl',
          highlight && 'gold-text'
        )}
      >
        {title}
      </h4>
      <p className='text-justify text-zinc-800 dark:text-zinc-300'>{body}</p>
    </div>
  )
}
