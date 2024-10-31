import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface NavItemProps {
  label: string
  href: string
}

export const NavItem: FC<NavItemProps> = ({ label, href }) => {
  const pathname = usePathname()

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:z-10 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-lg after:bg-muted-foreground after:opacity-0 after:transition after:hover:scale-x-100 after:hover:opacity-100',
          pathname.includes(href) && 'text-fuchsia-500',
        )}
      >
        {label}
      </Link>
    </li>
  )
}
