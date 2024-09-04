export interface CategoryItem {
	_id: string
	name: string
	categoryType: string
	createdAt: string
	updatedAt: string
}

export interface CategoryMap {
	books: CategoryItem[]
	textbooks: CategoryItem[]
	stationeries: CategoryItem[]
}

export interface Categories {
	categories: CategoryItem[]
}

export interface Category {
	category: CategoryItem
}
