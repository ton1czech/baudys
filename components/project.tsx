import { useCursor } from '@/store/useCursor'
import Link from 'next/link'
import { FC } from 'react'

interface ProjectProps {
  name: string
  year: number
  image: string
  url: string
}

export const Project: FC<ProjectProps> = ({ name, year, image, url }) => {
  const { setIsHovering, setIsNotHovering, setType } = useCursor()

  const onMouseEnter = () => {
    setIsHovering()
    setType('project')
  }

  const onMouseLeave = () => {
    setIsNotHovering()
    setType('')
  }

  return (
    <Link href={url} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={image} alt={name} />

      <div className='flex justify-between'>
        <h3 className='font-semibold text-zinc-800 dark:text-zinc-200 text-lg'>
          {name}
        </h3>
        <p className='font-light text-zinc-600 dark:text-zinc-400 italic text-sm'>
          {year}
        </p>
      </div>
    </Link>
  )
}
