'use client'

import { cn } from '@/lib/utils'
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

  return (
    <li>
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={cn(
          'relative text-4xl font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:z-10 after:h-[3px] after:w-full after:scale-x-0 after:rounded-lg after:bg-purple-500 after:opacity-0 after:transition after:hover:scale-x-100 after:hover:opacity-100',
          pathname.includes(href) && 'text-purple-500',
        )}
      >
        {label}
      </Link>
    </li>
  )
}
