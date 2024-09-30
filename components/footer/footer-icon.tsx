import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'

interface FooterIconProps {
  icon: LucideIcon | IconType
  href: string
  name: string
}

export const FooterIcon: FC<FooterIconProps> = ({ icon: Icon, href, name }) => {
  return (
    <Link href={href} target='_blank'>
      <Icon className='h-6 w-6 stroke-zinc-400 text-zinc-400 transition hover:stroke-zinc-600 hover:text-zinc-600' />
      <p className='sr-only'>{name}</p>
    </Link>
  )
}
