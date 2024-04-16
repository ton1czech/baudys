import { cn } from '@/lib/utils'
import { useCursor } from '@/store/use-cursor'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface NavItemProps {
  label: string
  href: string
}

export const NavItem: FC<NavItemProps> = ({ label, href }) => {
  const pathname = usePathname()
  const { setIsNotHovering, setIsHovering } = useCursor()

  return (
    <li onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
      <Link
        href={href}
        className={cn(
          'after:w-full after:h-[3px] after:bg-purple-500 after:-bottom-1 after:left-0 after:right-0 after:z-10 after:absolute relative after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:rounded-lg',
          pathname.includes(href) && 'text-purple-500'
        )}
      >
        {label}
      </Link>
    </li>
  )
}
