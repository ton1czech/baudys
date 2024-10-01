import { getPosts } from '@/actions/get-posts'
import { Categories } from '@/components/blog/categories'
import { Posts } from '@/components/blog/posts'
import { Contact } from '@/components/contact'
import { Container } from '@/components/container'
import { Title } from '@/components/title'

export default async function Page() {
  const posts = await getPosts()

  return (
    <div className='space-y-20 lg:space-y-40'>
      <Container>
        <Title label='Blog' />
        <Categories />
        <Posts posts={posts} />
      </Container>
      <Contact />
    </div>
  )
}
