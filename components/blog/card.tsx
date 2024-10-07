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
      <div className='relative aspect-square overflow-hidden rounded-2xl border border-zinc-400/40'>
        <img
          src={image}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-105'
        />

        <span className='absolute bottom-3 right-3 rounded-md bg-black/40 p-1 text-xs text-zinc-100'>
          {new Date(publishDate).toLocaleDateString('cs-CS')}
        </span>
      </div>

      <div className='flex items-center justify-between'>
        <h2 className='mt-2 text-lg font-semibold md:text-xl'>{title}</h2>
        <div className='flex gap-1'>
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/blog/${cat}`}
              className='rounded-md bg-violet-700 px-2 py-0.5 text-sm text-zinc-100'
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </Link>
  )
}
