'use client'

import { useLanguage } from '@/store/useLanguage'
import React, { FC } from 'react'

interface ActionProviderProps {
  createChatBotMessage: any
  setState: any
  children: any
}

export const ActionProvider: FC<ActionProviderProps> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const { language } = useLanguage()

  const fallback = () => {
    const message = createChatBotMessage(
      language === 'en'
        ? "I'm sorry. I didn't understand your question."
        : 'Omlouvám se, nerozumněl jsem Vaší otázce.'
    )

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  const hello = () => {
    const message = createChatBotMessage(
      language === 'en' ? 'Hello. Nice to meet you.' : 'Ahoj. Rád tě poznávám.'
    )

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  const question = () => {
    const message = createChatBotMessage(
      language === 'en'
        ? "Ask, I'll be glad to help you."
        : 'Zeptejte se, rád Vám pomůžu.'
    )

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  const time = () => {
    const message = createChatBotMessage(
      language === 'en'
        ? 'With proper cooperation I am able to complete the project within 1 month.'
        : 'Při správné spolupráci jsem schopný projekt dokončit do 1 měsíce.'
    )

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  const price = () => {
    const message = createChatBotMessage(
      language === 'en'
        ? 'The price of each project is individual. It depends on the number of pages, additional services and complexity.'
        : 'Cena každého projektu je individuální. Záleží na počtu stránek, doplňkových službách a náročnosti.'
    )

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  const experience = () => {
    const message = createChatBotMessage(
      language === 'en'
        ? 'I have been doing photography and design since 2015, programming since 2019.'
        : 'Fotografování a designu se věnuji od roku 2015, programování od roku 2019.'
    )

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          actions: {
            fallback,
            hello,
            question,
            time,
            price,
            experience,
          },
        })
      })}
    </div>
  )
}
