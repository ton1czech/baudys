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
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.')

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        })
      })}
    </div>
  )
}
