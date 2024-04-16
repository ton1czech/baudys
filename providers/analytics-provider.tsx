'use client'

import { useCookies } from '@/store/use-cookies'
import { GoogleAnalytics } from '@next/third-parties/google'

export const GoogleAnalyticsProvider = () => {
  const { cookiesEnabled } = useCookies()

  return (
    <>
      {cookiesEnabled && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG!} />
      )}
    </>
  )
}
