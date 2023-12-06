'use client'

import Chatbot from 'react-chatbot-kit'
import { config } from './config'
import { MessageParser } from './message-parser'
import { ActionProvider } from './action-provider'

export const ChatbotContainer = () => {
  return (
    <div className='fixed right-24 bottom-24 z-50'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}
