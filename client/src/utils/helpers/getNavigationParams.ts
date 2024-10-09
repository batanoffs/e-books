import { Params } from 'react-router-dom'

export const getProductCategoryBG = (params: Readonly<Params<string>>) => {
	const tokens = Object.values(params)[0]?.split('/') ?? []
	const productType = tokens[0]
	const productTypeBG =
		{
			books: 'книги',
			textbooks: 'учебници',
			stationery: 'канцелария',
		}[productType] ?? productType

	return { productTypeBG, productType }
}
