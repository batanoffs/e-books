import { useCallback, useEffect, useState } from 'react'
import { useDataProvider } from 'react-admin'

type Category = {
	id: string
	name: string
	books: string[]
	textbooks: string[]
	stationery: string[]
}

const CategoriesList = () => {
	const [categories, setCategories] = useState<Category[]>()
	const dataProvider = useDataProvider()

	const fetchCategories = useCallback(async () => {
		try {
			const response = await dataProvider.getList<Category>('categories', {
				pagination: { page: 1, perPage: 100 },
				sort: { field: 'name', order: 'ASC' },
			})
			setCategories(response.data)
		} catch (error) {
			console.error('Error fetching categories', error)
		}
	}, [dataProvider])

	useEffect(() => {
		fetchCategories()
	}, [fetchCategories])

	return (
		<ul>
			{categories.books?.map((book, index) => (
				<li key={index}>{book}</li>
			))}
		</ul>
	)
}
export default CategoriesList
