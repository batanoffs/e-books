import { create } from 'zustand'

interface CategoryItem {
	_id: string
	name: string
	categoryType: string
	createdAt: string
	updatedAt: string
}

interface CategoryStore {
	categoriesMap: Map<string, CategoryItem[]>
	setCategories: (fetchedData: CategoryItem[]) => void
	addCategory: (category: string, items: CategoryItem[]) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
	categoriesMap: new Map<string, CategoryItem[]>(),

	setCategories: (fetchedData: CategoryItem[]) =>
		set(() => {
			// Create a new Map to hold the categories
			const newCategoryMap = new Map<string, CategoryItem[]>()
			// Reduce the fetched data into a nested object structure
			// where the outer keys are the categories and the values are arrays of items
			const entries = fetchedData.reduce((accumulator, current) => {
				// Get the category from the current item
				const category = current.categoryType
				// If the category doesn't exist in the accumulator, create it
				if (!accumulator[category]) {
					accumulator[category] = []
				}
				// Add the current item to the category's array
				accumulator[category].push(current)
				return accumulator
			}, {} as Record<string, CategoryItem[]>)
			// Loop through the entries and add them to the new category map
			Object.entries(entries).forEach(([category, items]) => {
				// Set the category in the new map to the array of items
				newCategoryMap.set(category, items)
			})

			// Return the new category map
			return { categoriesMap: newCategoryMap }
		}),

	addCategory: (category: string, items: CategoryItem[]) =>
		set((state) => {
			state.categoriesMap.set(category, items)
			return { categoriesMap: new Map(state.categoriesMap) }
		}),
}))

export default useCategoryStore
