export interface BookTextBook {
	_id: string
	title: string
	author: string
	price: number
	description: string
	picture: string
	coverPageType: string
	stock: number
	categories: string[]
	publisher?: string
	language?: string
	publishDate?: Date
	pageCount?: number
	translator?: string
	dimensions?: string
	createdAt: Date
	productType: string
}

export interface Stationery {
	_id: string
	title: string
	price: number
	description: string
	picture: string
	categories: string[]
	stock: number
	createdAt: Date
	productType: string
}

export type Products = {
	products: BookTextBook[] | Stationery[]
}

export type Product = BookTextBook | Stationery
