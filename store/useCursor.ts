import { create } from 'zustand'

interface CursorStore {
  mousePosition: { x: number; y: number }
  setMousePosition: (x: number, y: number) => void
  isHovering: boolean
  setIsHovering: () => void
  setIsNotHovering: () => void
  type: string
  setType: (type: string) => void
}

export const useCursor = create<CursorStore>(set => ({
  mousePosition: { x: 0, y: 0 },
  setMousePosition: (x, y) => set({ mousePosition: { x, y } }),
  isHovering: false,
  setIsHovering: () => set({ isHovering: true }),
  setIsNotHovering: () => set({ isHovering: false }),
  type: '',
  setType: type => set({ type: type }),
}))
