import { getPostsByCategory } from '@/actions/get-posts-by-category'
import { Posts } from '@/components/blog/posts'
import { categories } from '@/database/categories'
import type { Category } from '@/types/blog'
import { notFound } from 'next/navigation'

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
      <h1>Category: {category}</h1>
      <Posts posts={posts} />
    </main>
  )
}

export function generateStaticParams() {
  return categories.map(category => ({
    category,
  }))
}
