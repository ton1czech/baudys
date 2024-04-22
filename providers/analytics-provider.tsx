'use client'

import { useCookies } from '@/store/use-cookies'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect, useState } from 'react'

export const AnalyticsProvider = () => {
  const { cookiesEnabled } = useCookies()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  return (
    <>
      {mounted && (
        <>
          {cookiesEnabled ||
            (window &&
              window?.localStorage
                .getItem('cookies-storage')
                ?.includes('"cookiesEnabled":true') && (
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG!} />
              ))}
        </>
      )}
    </>
  )
}
