import { Params } from 'react-router-dom'

export const getNavigationParams = (params: Readonly<Params<string>>) => {
	const [type, navCategory] = Object.values(params)[0]?.split('/') ?? []

	const headerText = {
			books: 'книги',
			textbooks: 'учебници',
			stationery: 'канцелария',
		}[type] ?? type

	const navString = `книжарница / ${headerText} / ${navCategory}`

	return {
		navString,
		navCategory,
		type,
	}
}
