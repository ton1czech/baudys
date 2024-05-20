import { getPosts } from '@/actions/get-posts'
import { Posts } from '@/components/blog/posts'

export default async function Page() {
  const posts = await getPosts()

  return (
    <main>
      <h1 className='text-7xl'>BLOG</h1>
      <Posts posts={posts} />
    </main>
  )
}
