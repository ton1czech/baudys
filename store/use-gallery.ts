import { create } from 'zustand'

interface GalleryStore {
  cars: boolean
  setCars: () => void
  animals: boolean
  setAnimals: () => void
}

export const useGallery = create<GalleryStore>(set => ({
  cars: true,
  setCars: () => set(state => ({ cars: !state.cars })),
  animals: true,
  setAnimals: () => set(state => ({ animals: !state.animals })),
}))
