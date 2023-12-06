'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { ChatbotContainer } from './chatbot-container'
import { useCursor } from '@/store/useCursor'

export const ChatbotProvider = () => {
  const [isChatbotActive, setIsChatbotActive] = useState<boolean>(false)
  const { setIsHovering, setIsNotHovering } = useCursor()

  return (
    <>
      <div
        onClick={() => setIsChatbotActive(prev => !prev)}
        className='fixed bottom-10 right-10 bg-sky-500 hover:bg-sky-600 transition rounded-full z-[999]'
      >
        <MessageCircle
          className='p-2 h-12 w-12'
          onMouseEnter={setIsHovering}
          onMouseLeave={setIsNotHovering}
        />
      </div>
      {isChatbotActive && <ChatbotContainer />}
    </>
  )
}
