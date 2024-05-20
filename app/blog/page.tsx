import { getPosts } from '@/actions/get-posts'
import { Cateogries } from '@/components/blog/categories'
import { Posts } from '@/components/blog/posts'
import { Title } from '@/components/title'

export default async function Page() {
  const posts = await getPosts()

  return (
    <main>
      <Title label='BLOG' />
      <Cateogries />
      <Posts posts={posts} />
    </main>
  )
}
