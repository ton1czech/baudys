import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { feed } from '@/database/photography'
import { SeeAll } from '@/components/see-all'
import { FeedItem } from './feed-item'

export const Feed = () => {
  return (
    <Container>
      <Title label='Feed' />

      <div className='grid grid-cols-3 gap-3'>
        {feed.map((image) => (
          <FeedItem key={image} image={image} />
        ))}
      </div>

      <div className='mt-10 flex justify-center'>
        <SeeAll href='/gallery' />
      </div>
    </Container>
  )
}
