import { getPostsByCategory } from '@/actions/get-posts-by-category'
import { Posts } from '@/components/blog/posts'
import { Categories } from '@/components/blog/categories'
import { Title } from '@/components/title'
import { categories } from '@/database/categories'
import type { Category } from '@/types/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Contact } from '@/components/contact'

export default async function Category({
  params,
}: {
  params: { category: Category }
}) {
  const { category } = params

  if (categories.indexOf(category) == -1) notFound()

  const posts = await getPostsByCategory({ category })

  return (
    <main>
      <p className='inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
        <Link href='/blog' className='hover:underline'>
          blog
        </Link>
        <ChevronRight size={18} />
        <span className='font-bold'>{category}</span>
      </p>
      <Title label={category} />
      <Categories />
      <Posts posts={posts} />
      <Contact />
    </main>
  )
}

export function generateStaticParams() {
  return categories.map(category => ({
    category,
  }))
}
