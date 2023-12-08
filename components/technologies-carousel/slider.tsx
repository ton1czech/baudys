'use client'

import { SizeContext } from '@/lib/size-observer'
import { useAnimationFrame } from '@/lib/use-animation-frame'
import { PropsWithChildren, useCallback, useContext, useRef } from 'react'

interface Props {
  children: React.ReactNode
  contentWidth: number
}

export const SliderContainer: React.FC<Props> = ({
  children,
  contentWidth,
}) => {
  const { innerWidth } = useContext(SizeContext)
  const refScrollX = useRef<number>(0)
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  const enabled = innerWidth < contentWidth

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer
      const { current: elContent } = refContent
      if (elContainer && elContent) {
        refScrollX.current += 0.5
        elContainer.scrollLeft = refScrollX.current

        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0
          elContainer.scrollLeft = 0
        }
      }
    }, [])
  )

  return (
    <div
      ref={refContainer}
      className='z-10 max-w-full overflow-x-hidden whitespace-nowrap'
    >
      <div ref={refContent} className='inline-flex items-center'>
        {children}
      </div>
      <div className={enabled ? 'inline-flex items-center' : 'hidden'}>
        {children}
      </div>
    </div>
  )
}

interface ItemProps {
  width: number
}

export const SliderItem: React.FC<PropsWithChildren<ItemProps>> = ({
  children,
  width,
}) => (
  <div
    className='z-10 inline-flex items-center justify-center p-3 mx-4 rounded-lg'
    style={{
      width,
    }}
  >
    {children}
  </div>
)
