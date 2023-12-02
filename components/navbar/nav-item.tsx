import Link from 'next/link'
import { FC } from 'react'

interface NavItemProps {
  label: string
  href: string
}

export const NavItem: FC<NavItemProps> = ({ label, href }) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  )
}
