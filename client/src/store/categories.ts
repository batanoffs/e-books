import { create } from 'zustand'

interface CategoryItems {
	[key: string]: string[]
}

interface CategoryStore {
	categoriesMap: Map<string, string[]>
	setCategories: (fetchedData: CategoryItems) => void
	addCategory: (category: string, items: string[]) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
	categoriesMap: new Map<string, string[]>(),

	setCategories: (fetchedData: CategoryItems) =>
		set(() => {
			const newCategoryMap = new Map<string, string[]>()
			const entries = Object.entries(fetchedData)
			delete entries[0]

			entries.forEach(([category, items]) => {
				newCategoryMap.set(category, items)
			})

			return { categoriesMap: newCategoryMap }
		}),

	addCategory: (category: string, items: string[]) =>
		set((state) => {
			state.categoriesMap.set(category, items)
			return { categoriesMap: new Map(state.categoriesMap) }
		}),
}))

export default useCategoryStore
