'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { MapPin } from 'lucide-react'
import Clock from 'react-live-clock'

export const Hero = () => {
  const { language } = useLanguage()

  return (
    <section>
      <Container className='flex flex-col gap-1 md:grid md:grid-cols-2 md:gap-5'>
        <div className='order-2 mt-2 md:order-1'>
          <img src='/home/hero.webp' alt='me' className='rounded-xl' />
          <div className='mt-3 flex items-center gap-2 rounded-xl border border-zinc-200/10 bg-zinc-800/80 p-2 md:hidden'>
            <div className='flex items-center gap-1'>
              <MapPin className='size-5' />
              {language === 'cs' && 'Plzeňský kraj, Česká republika'}
              {language === 'en' && 'Pilsen region, Czech republic'}
            </div>
            <span className='text-xs text-zinc-300'>
              (
              <Clock
                format={'HH:mm:ss'}
                ticking={true}
                timezone={'EU/Prague'}
              />
              )
            </span>
          </div>
        </div>

        <div className='order-1 flex flex-col justify-between md:order-2'>
          <div>
            <h1 className='text-zinc-300'>
              {language === 'cs' && 'Ahoj, já jsem Daniel'}
              {language === 'en' && "Hi, I'm Daniel"}
            </h1>

            <div className='space-y-1 text-2xl font-bold md:space-y-2 lg:text-4xl 2xl:text-5xl'>
              <p className='flex items-center gap-4'>
                {language === 'cs' && 'Programátor'}
                {language === 'en' && 'Programmer'}
                <span className='rounded-md border border-zinc-200/10 bg-fuchsia-500/20 p-1 text-sm text-fuchsia-500 md:p-2 md:text-base'>
                  4 {language === 'cs' && 'roky'}
                  {language === 'en' && 'years'}
                </span>
              </p>

              <p className='flex items-center gap-4'>
                {language === 'cs' && 'Fotograf'}
                {language === 'en' && 'Photographer'}
                <span className='rounded-md border border-zinc-200/10 bg-green-500/20 p-1 text-sm text-green-500 md:p-2 md:text-base'>
                  9 {language === 'cs' && 'let'}
                  {language === 'en' && 'years'}
                </span>
              </p>

              <p className='flex items-center gap-4'>
                {language === 'cs' && 'Designér'}
                {language === 'en' && 'Designer'}
                <span className='rounded-md border border-zinc-200/10 bg-sky-500/20 p-1 text-sm text-sky-500 md:p-2 md:text-base'>
                  3 {language === 'cs' && 'roky'}
                  {language === 'en' && 'years'}
                </span>
              </p>
            </div>
          </div>

          <div className='hidden items-center gap-2 rounded-xl border border-zinc-200/10 bg-zinc-800/80 p-2 md:flex'>
            <div className='flex items-center gap-1'>
              <MapPin className='size-5' />
              {language === 'cs' && 'Plzeňský kraj, Česká republika'}
              {language === 'en' && 'Pilsen region, Czech republic'}
            </div>
            <span>
              (
              <Clock
                format={'HH:mm:ss'}
                ticking={true}
                timezone={'EU/Prague'}
              />
              )
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
