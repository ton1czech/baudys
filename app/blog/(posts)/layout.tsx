import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className='inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
        <Link href='/blog' className='hover:underline'>
          blog
        </Link>
        <ChevronRight size={18} />
        {/* @ts-ignore */}
        <span className='font-bold'>{children.props.childPropSegment}</span>
      </p>
      {children}
    </>
  )
}
