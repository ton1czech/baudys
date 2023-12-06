'use client'

import { useLanguage } from '@/store/useLanguage'
import React, { FC } from 'react'

interface MessageParserProps {
  children: any
  actions: any
}

export const MessageParser: FC<MessageParserProps> = ({
  children,
  actions,
}) => {
  const { language } = useLanguage()

  const parse = (message: any) => {
    if (
      message.includes(language === 'en' ? 'hello' : 'ahoj') |
      message.includes(language === 'en' ? 'hey' : 'zdar') |
      message.includes(language === 'en' ? 'hi' : 'čau')
    ) {
      actions.hello()
    } else if (
      message.includes(language === 'en' ? 'question' : 'otázka') |
      message.includes(language === 'en' ? 'query' : 'dotaz') |
      message.includes(language === 'en' ? 'ask' : 'zeptat')
    ) {
    } else if (
      message.includes(language === 'en' ? 'time' : 'čas') |
      message.includes(language === 'en' ? 'long' : 'dlouho') |
      message.includes(language === 'en' ? 'length' : 'délka')
    ) {
      actions.time()
    } else if (
      message.includes(language === 'en' ? 'price' : 'cena') |
      message.includes(language === 'en' ? 'cost' : 'náklady') |
      message.includes(language === 'en' ? 'cheap' : 'levné') |
      message.includes(language === 'en' ? 'expensive' : 'drahé')
    ) {
      actions.price()
    } else {
      actions.fallback()
    }
  }

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        })
      })}
    </div>
  )
}