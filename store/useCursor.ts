import { create } from 'zustand'

interface CursorStore {
  isHovering: boolean
  setIsHovering: () => void
  setIsNotHovering: () => void
}

export const useCursor = create<CursorStore>(set => ({
  isHovering: false,
  setIsHovering: () => set({ isHovering: true }),
  setIsNotHovering: () => set({ isHovering: false }),
}))
