'use client'

import { FC } from 'react'
import { SliderItem, SliderContainer } from './slider'
import {
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaApple,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiStreamlit,
  SiBun,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiVisualstudiocode,
  SiNeovim,
  SiArchlinux,
  SiFujifilm,
  SiLogitech,
} from 'react-icons/si'
import { FaGolang } from 'react-icons/fa6'

export const Logos: FC = () => (
  <SliderContainer contentWidth={1400}>
    <SliderItem width={100}>
      <FaPython className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaHtml5 className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaCss3 className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiJavascript className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiTypescript className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaGolang className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiNextdotjs className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaReact className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiStreamlit className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaNodeJs className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiBun className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiTailwindcss className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiVercel className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiNetlify className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiVisualstudiocode className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiNeovim className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiArchlinux className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaGitAlt className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaGithub className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <FaApple className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiLogitech className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
    <SliderItem width={100}>
      <SiFujifilm className='h-10 w-10 text-zinc-700 dark:text-zinc-300' />
    </SliderItem>
  </SliderContainer>
)
