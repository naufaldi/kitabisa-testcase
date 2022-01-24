import { atom, selector } from 'recoil'

export const filterAtom = atom({
  key: 'filterAtom',
  default: 'asc-goal'
})

export const filterAscSelector = selector({
  key: 'filterAscSelector',
  get: ({ get }) => {
    const filter = get(filterAtom)
    return filter === 'asc'
  }
})
