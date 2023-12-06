import React, { FC } from 'react'

interface MessageParserProps {
  children: any
  actions: any
}

export const MessageParser: FC<MessageParserProps> = ({
  children,
  actions,
}) => {
  const parse = (message: any) => {
    if (message.includes('hello')) {
      actions.handleHello()
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
