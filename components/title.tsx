import { FC } from 'react'

interface TitleProps {
  label: string
}

export const Title: FC<TitleProps> = ({ label }) => {
  return (
    <h3 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 xl:mb-10 uppercase'>
      {label}
    </h3>
  )
}
