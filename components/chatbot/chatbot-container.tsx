'use client'

import Chatbot from 'react-chatbot-kit'
import { config } from './config'
import { MessageParser } from './message-parser'
import { ActionProvider } from './action-provider'

export const ChatbotContainer = () => {
  return (
    <div className='fixed right-16 bottom-16 md:right-24 md:bottom-24 z-50 flex'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}
