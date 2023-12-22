'use client'

import { Container } from '@/components/container'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useCursor } from '@/store/useCursor'
import { useLanguage } from '@/store/useLanguage'
import {
  FolderKanban,
  Github,
  Gitlab,
  Globe,
  Hammer,
  Linkedin,
  LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { FaDocker, FaKaggle, FaSteam } from 'react-icons/fa'
import { cn } from '@/lib/utils'

interface LinkItemProps {
  icon: LucideIcon
  label: string
  href: string
  color?: string
}

const LinkItem: FC<LinkItemProps> = ({ icon: Icon, label, href, color }) => {
  const { setIsHovering, setIsNotHovering } = useCursor()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='w-full'
    >
      <Button
        className={cn(
          'w-full lg:w-1/2 text-lg font-semibold border border-zinc-800/50 dark:border-zinc-200/50 dark:text-zinc-200',
          color
            ? color
            : 'bg-zinc-300/80 hover:bg-zinc-400/70 text-zinc-800 dark:bg-zinc-800/80 dark:hover:bg-zinc-900/70'
        )}
        onMouseEnter={setIsHovering}
        onMouseLeave={setIsNotHovering}
      >
        <Link
          href={href}
          target='_blank'
          className='inline-flex gap-2 items-center w-full justify-center'
        >
          <Icon />
          {label}
        </Link>
      </Button>
    </motion.div>
  )
}

export default function Page() {
  const { language } = useLanguage()

  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Container className='flex flex-col text-center w-full'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='w-full'
        >
          <Avatar className='w-32 h-32 lg:w-60 lg:h-60 mb-4 mx-auto'>
            <AvatarImage src='/avatar.webp' />
            <AvatarFallback className='font-bold text-3xl md:text-4xl lg:text-5xl'>
              DAB
            </AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-1'
        >
          Daniel Anthony Baudyš
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-10 md:mb-14'
        >
          Designer a Programátor
        </motion.p>

        <div className='space-y-3 md:space-y-4 flex flex-col justify-center items-center'>
          <LinkItem href='/' label='Web' icon={Globe} />
          <LinkItem
            href='/projects'
            label={language === 'en' ? 'Projects' : 'Projekty'}
            icon={FolderKanban}
          />
          <LinkItem
            href='/services'
            label={language === 'en' ? 'Services' : 'Služby'}
            icon={Hammer}
          />
          <LinkItem
            href='https://www.linkedin.com/in/ton1czech/'
            label='Linkedin'
            icon={Linkedin}
            color='bg-teal-600/80 hover:bg-teal-700/80'
          />
          <LinkItem
            href='https://gitlab.com/ton1czech/'
            label='Github'
            icon={Github}
            color='bg-fuchsia-700/80 hover:bg-fuchsia-800/80'
          />
          <LinkItem
            href='https://github.com/ton1czech/'
            label='Gitlab'
            icon={Gitlab}
            color='bg-fuchsia-700/80 hover:bg-fuchsia-800/80'
          />
          <LinkItem
            href='https://hub.docker.com/u/ton1czech'
            label='DockerHub'
            icon={FaDocker}
            color='bg-fuchsia-700/80 hover:bg-fuchsia-800/80'
          />
          <LinkItem
            href='https://www.kaggle.com/ton1czech'
            label='Kaggle'
            icon={FaKaggle}
            color='bg-fuchsia-700/80 hover:bg-fuchsia-800/80'
          />
          <LinkItem
            href='https://steamcommunity.com/id/ton1czech/'
            label='Steam'
            icon={FaSteam}
            color='bg-indigo-700/80 hover:bg-indigo-800/80'
          />
        </div>
      </Container>
    </div>
  )
}
