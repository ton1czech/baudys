import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='mt-28 lg:mt-32'>{children}</div>
}
