import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className='mt-28 lg:mt-32'>{children}</main>
}
