import type { Post } from '@/types/blog'
import { readdir } from 'fs/promises'

export async function getPosts(): Promise<Post[]> {
  const slugs = (
    await readdir('./app/blog/(posts)', { withFileTypes: true })
  ).filter(dirent => dirent.isDirectory())

  console.log(slugs)

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../app/blog/(posts)/${name}/page.mdx`)
      return { slug: name, ...metadata }
    })
  )

  console.log(posts)

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

  return posts
}
