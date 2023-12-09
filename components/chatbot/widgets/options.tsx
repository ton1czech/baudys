'use client'

import { useLanguage } from '@/store/useLanguage'
import React from 'react'

export const Options = (props: any) => {
  const { language } = useLanguage()

  const options = [
    {
      text: language === 'en' ? 'Development Time' : 'Doba Vývoje',
      handler: props.actionProvider.time,
      id: 1,
    },
    {
      text: language === 'en' ? 'Price' : 'Cena',
      handler: props.actionProvider.price,
      id: 2,
    },
    {
      text: language === 'en' ? 'Experience' : 'Zkušenosti',
      handler: props.actionProvider.experience,
      id: 3,
    },
  ]

  const buttonsMarkup = options.map(option => (
    <button
      key={option.id}
      onClick={option.handler}
      className='m-1 rounded-lg p-2 border text-center text-sm bg-zinc-300 border-zinc-500 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-800 transition'
    >
      {option.text}
    </button>
  ))

  return <div className='flex flex-wrap'>{buttonsMarkup}</div>
}
