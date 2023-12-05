import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface FooterIconProps {
  icon: LucideIcon
  href: string
  name: string
}

export const FooterIcon: FC<FooterIconProps> = ({ icon: Icon, href, name }) => {
  return (
    <Link href={href} target='_blank'>
      <Icon className='w-6 h-6 stroke-zinc-700 dark:stroke-zinc-400 hover:stroke-zinc-900 dark:hover:stroke-zinc-600 transition' />
      <p className='sr-only'>{name}</p>
    </Link>
  )
}
