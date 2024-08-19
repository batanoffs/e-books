import { create } from 'zustand'

type CategoriesState = {
	navCategory: string | null
	bookCategories: string[]
	textbookCategories: string[]
	stationeryCategories: string[]
	filters: string[]
	setNavCategory: (category: string | null) => void
	setFilters: (filters: string[]) => void
	setBookCategories: (categories: string[]) => void
	setTextbookCategories: (categories: string[]) => void
	setStationeryCategories: (categories: string[]) => void
}

const useFiltersStore = create<CategoriesState>((set) => ({
	navCategory: 'all',
	bookCategories: [],
	textbookCategories: [],
	stationeryCategories: [],
	filters: [],
	setBookCategories: (bookCategories: string[]) => set({ bookCategories }),
	setTextbookCategories: (textbookCategories: string[]) => set({ textbookCategories }),
	setStationeryCategories: (stationeryCategories: string[]) => set({ stationeryCategories }),
	setNavCategory: (navCategory: string | null) => set({ navCategory }),
	setFilters: (filters: string[]) => set({ filters }),
}))

export default useFiltersStore
