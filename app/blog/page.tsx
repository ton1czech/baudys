import { getPosts } from '@/actions/get-posts'
import { Categories } from '@/components/blog/categories'
import { Posts } from '@/components/blog/posts'
import { Contact } from '@/components/contact'
import { Title } from '@/components/title'

export default async function Page() {
  const posts = await getPosts()

  return (
    <main>
      <Title label='BLOG' />
      <Categories />
      <Posts posts={posts} />
      <Contact />
    </main>
  )
}
