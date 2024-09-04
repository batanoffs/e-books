import { create } from 'zustand'
import { CategoryItem, CategoryMap } from '../interfaces/categories.interface'

interface CategoryStore {
	categoriesMap: CategoryMap
	setCategories: (fetchedData: CategoryMap) => void
	addCategory: (category: keyof CategoryMap, items: CategoryItem[]) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
	categoriesMap: {
		books: [],
		textbooks: [],
		stationeries: [],
	},

	setCategories: (fetchedData: CategoryMap) =>
		set(() => {
			// Update the categoriesMap with fetched data
			return { categoriesMap: fetchedData }
		}),

	addCategory: (category: keyof CategoryMap, items: CategoryItem[]) =>
		set((state) => {
			// Update the specific category in the categoriesMap
			const updatedMap = { ...state.categoriesMap, [category]: items }
			return { categoriesMap: updatedMap }
		}),
}))

export default useCategoryStore
