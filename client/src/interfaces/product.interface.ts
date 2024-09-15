export interface Book {
	id: string
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
}

export interface Textbook {
	id: string
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
}

export interface Stationery {
	id: string
	title: string
	price: number
	description: string
	picture: string
	categories: string[]
	stock: number
	createdAt: Date
}

export type Products = {
	products: Book[] | Textbook[] | Stationery[]
}

export type Product = Book | Textbook | Stationery
