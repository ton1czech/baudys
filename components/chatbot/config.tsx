'use client'

import { createChatBotMessage } from 'react-chatbot-kit'
import { Avatar } from './widgets/avatar'
import { Options } from './widgets/options'

export const config = {
  initialMessages: [
    createChatBotMessage('???', {
      widget: 'options',
    }),
  ],
  botName: 'Daniel',
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props: any) => <Options {...props} />,
    },
  ],
  customComponents: {
    header: () => <></>,
    botAvatar: (props: any) => <Avatar {...props} />,
  },
}
