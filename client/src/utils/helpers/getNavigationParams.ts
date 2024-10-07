import { Params } from 'react-router-dom'

export const getNavigationParams = (params: Readonly<Params<string>>) => {
	const [productType, productCategory] = Object.values(params)[0]?.split('/') ?? []
	const headerText =
		{
			books: 'книги',
			textbooks: 'учебници',
			stationery: 'канцелария',
		}[productType] ?? productType

	const shortNav = `книжарница / ${headerText}`
	const longNav = `книжарница / ${headerText} / ${productCategory}`
	const navString = productCategory ? longNav : shortNav
	
	return {
		navString,
		productCategory,
		headerText,
		productType,
	}
}
