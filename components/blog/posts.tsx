import { Post } from '@/types/blog'
import { Card } from './card'

interface Props {
  posts: Post[]
}

export const Posts = ({ posts }: Props) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-32 md:mb-44 lg:mb-60'>
      {posts.map(({ slug, title, image, publishDate, categories }) => (
        <Card
          key={slug}
          slug={slug}
          title={title}
          image={image}
          publishDate={publishDate}
          categories={categories}
        />
      ))}
    </div>
  )
}
