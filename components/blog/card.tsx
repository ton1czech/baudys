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
      <div className='relative border border-zinc-400/40 rounded-2xl overflow-hidden aspect-square'>
        <img
          src={image}
          alt={title}
          className='absolute w-full group-hover:scale-105 transition object-center left-0 -top-1/2'
        />

        <span className='absolute right-3 bottom-3 text-zinc-100 text-xs bg-black/20 p-1 rounded-md'>
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
              className='bg-violet-700 px-2 py-0.5 rounded-md text-zinc-100 text-sm'
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </Link>
  )
}
