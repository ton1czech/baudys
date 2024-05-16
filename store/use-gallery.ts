import { create } from 'zustand'

interface GalleryStore {
  cars: boolean
  setCars: () => void
  animals: boolean
  setAnimals: () => void
  events: boolean
  setEvents: () => void
  fitness: boolean
  setFitness: () => void
  nature: boolean
  setNature: () => void
  monuments: boolean
  setMonuments: () => void
}

export const useGallery = create<GalleryStore>(set => ({
  cars: true,
  setCars: () => set(state => ({ cars: !state.cars })),
  animals: true,
  setAnimals: () => set(state => ({ animals: !state.animals })),
  events: true,
  setEvents: () => set(state => ({ events: !state.events })),
  fitness: true,
  setFitness: () => set(state => ({ fitness: !state.fitness })),
  nature: true,
  setNature: () => set(state => ({ nature: !state.nature })),
  monuments: true,
  setMonuments: () => set(state => ({ monuments: !state.monuments })),
}))
