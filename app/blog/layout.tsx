import { Container } from '@/components/container'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className='mt-28 lg:mt-32 mb-20 lg:mb-32'>{children}</Container>
  )
}
