'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface CookiesStore {
  isOpen: boolean
  openCookies: () => void

  closeCookies: () => void
  closeCookiesPermanently: () => void

  cookiesEnabled: boolean
  setCookiesEnabled: () => void
  setCookiesDisabled: () => void
}

export const useCookies = create(
  persist<CookiesStore>(
    set => ({
      isOpen: false,
      openCookies: () => {
        set({ isOpen: true })
      },
      closeCookies: () => {
        set({ isOpen: false })
      },
      closeCookiesPermanently: () => {
        set({ isOpen: false })
        document.cookie =
          'cookiesClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
      cookiesEnabled: false,
      setCookiesEnabled: () => {
        set({ cookiesEnabled: true })
        document.cookie =
          'cookiesEnabled=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
      setCookiesDisabled: () => {
        set({ cookiesEnabled: false })
        document.cookie =
          'cookiesEnabled=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
      },
    }),
    {
      name: 'cookies-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
