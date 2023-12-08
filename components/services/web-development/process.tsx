import { Container } from '@/components/container'
import { ProcessItem } from './process-item'

export const Process = () => {
  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80 space-y-8 lg:space-y-20 xl:space-y-40'>
      <ProcessItem
        align='right'
        label='test'
        body='test'
        img='/services/process-1.webp'
      />
      <ProcessItem
        align='left'
        label='test'
        body='test'
        img='/services/process-2.webp'
      />
      <ProcessItem
        align='right'
        label='test'
        body='test'
        img='/services/process-3.webp'
      />
    </Container>
  )
}
