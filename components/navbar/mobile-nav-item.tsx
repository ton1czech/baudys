'use client'

import { cn } from '@/lib/utils'
import { useCursor } from '@/store/useCursor'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface MobileNavItemProps {
  label: string
  href: string
  setIsOpen: (bool: boolean) => void
}

export const MobileNavItem: FC<MobileNavItemProps> = ({
  label,
  href,
  setIsOpen,
}) => {
  const pathname = usePathname()
  const { setIsNotHovering, setIsHovering } = useCursor()

  return (
    <li onMouseEnter={setIsHovering} onMouseLeave={setIsNotHovering}>
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={cn(
          'after:w-full after:h-[3px] after:bg-purple-500 after:-bottom-1 after:left-0 after:right-0 after:z-10 after:absolute relative after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:rounded-lg font-medium text-4xl',
          pathname === href && 'text-purple-500'
        )}
      >
        {label}
      </Link>
    </li>
  )
}
