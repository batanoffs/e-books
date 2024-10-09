import { create } from 'zustand'

type CategoriesState = {
	productCategory: string | null
	bookCategories: string[]
	textbookCategories: string[]
	stationeryCategories: string[]
	filters: string[]
	setProductCategory: (category: string | null) => void
	setFilters: (filters: string[]) => void
	setBookCategories: (categories: string[]) => void
	setTextbookCategories: (categories: string[]) => void
	setStationeryCategories: (categories: string[]) => void
}

const useFiltersStore = create<CategoriesState>((set) => ({
	productCategory: 'всички',
	bookCategories: [],
	textbookCategories: [],
	stationeryCategories: [],
	filters: [],
	setBookCategories: (bookCategories: string[]) => set({ bookCategories }),
	setTextbookCategories: (textbookCategories: string[]) => set({ textbookCategories }),
	setStationeryCategories: (stationeryCategories: string[]) => set({ stationeryCategories }),
	setProductCategory: (navCategory: string | null) => set({ productCategory: navCategory }),
	setFilters: (filters: string[]) => set({ filters }),
}))

export default useFiltersStore
