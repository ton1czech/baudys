'use client'

import { Bot } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ChatbotContainer } from './chatbot-container'
import { useCursor } from '@/store/useCursor'
import { useLanguage } from '@/store/useLanguage'

export const ChatbotProvider = () => {
  const [isChatbotActive, setIsChatbotActive] = useState<boolean>(false)
  const { setIsHovering, setIsNotHovering } = useCursor()

  const { language } = useLanguage()

  useEffect(() => {
    try {
      document.getElementsByClassName(
        'react-chatbot-kit-chat-input'
        // @ts-ignore
      )[0].placeholder =
        language === 'en'
          ? 'Enter your question here.'
          : 'Zde zadejte svůj dotaz.'
    } catch (error) {}
  }, [language, isChatbotActive])

  return (
    <>
      <div
        onClick={() => setIsChatbotActive(prev => !prev)}
        className='hidden md:block fixed bottom-3 right-3 md:bottom-10 md:right-10 bg-blue-600 hover:bg-blue-700 transition rounded-full z-50'
      >
        <Bot
          className='p-4 h-14 w-14 stroke-zinc-100'
          onMouseEnter={setIsHovering}
          onMouseLeave={setIsNotHovering}
        />
      </div>
      {isChatbotActive && <ChatbotContainer />}
    </>
  )
}
