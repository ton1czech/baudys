import type { Post } from '@/types/blog'
import Link from 'next/link'

interface Props extends Post {}

export const Card = ({
  slug,
  title,
  image,
  publishDate,
  categories,
}: Props) => {
  return (
    <Link href={`/blog/${slug}`} className='group'>
      <div className='relative border border-zinc-400/40 rounded-2xl p-4 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full group-hover:scale-105 transition'
        />

        <span className='absolute right-3 bottom-3 text-zinc-300 text-xs'>
          {new Date(publishDate).toLocaleDateString()}
        </span>
      </div>

      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-lg md:text-xl mt-2'>{title}</h2>
        <div className='flex gap-1'>
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/blog/${cat}`}
              className='bg-violet-700 px-1 rounded-md'
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </Link>
  )
}
