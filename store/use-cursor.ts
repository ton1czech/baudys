import { create } from 'zustand'

interface CursorStore {
  isHovering: boolean
  setIsHovering: () => void
  setIsNotHovering: () => void
  type: string
  setType: (type: string) => void
}

export const useCursor = create<CursorStore>((set) => ({
  isHovering: false,
  setIsHovering: () => set({ isHovering: true }),
  setIsNotHovering: () => set({ isHovering: false }),
  type: '',
  setType: (type) => set({ type: type }),
}))
