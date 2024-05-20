import type { Post } from '@/types/blog'
import { readdir } from 'fs/promises'

export async function getPosts(): Promise<Post[]> {
  const slugs = (
    await readdir('./app/blog/(posts)', { withFileTypes: true })
  ).filter(dirent => dirent.isDirectory())

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../app/blog/(posts)/${name}/page.mdx`)
      return { slug: name, ...metadata }
    })
  )

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

  return posts
}
