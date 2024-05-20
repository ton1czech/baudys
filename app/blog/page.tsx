import { Post } from '@/types/blog'
import { readdir } from 'fs/promises'
import Link from 'next/link'

export default async function Posts() {
  const getPosts = async (): Promise<Post[]> => {
    const slugs = (await readdir('./app/blog', { withFileTypes: true })).filter(
      dirent => dirent.isDirectory()
    )

    console.log(slugs)

    const posts = await Promise.all(
      slugs.map(async ({ name }) => {
        const { metadata } = await import(`./${name}/page.mdx`)
        return { slug: name, ...metadata }
      })
    )

    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

    return posts
  }

  const posts: Post[] = await getPosts()

  return (
    <ol>
      {posts.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{' '}
            {new Date(publishDate).toLocaleDateString()}{' '}
            {/* <strong>Categories:</strong>{' '} */}
            {/* {categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)} */}
          </p>
        </li>
      ))}
    </ol>
  )
}
