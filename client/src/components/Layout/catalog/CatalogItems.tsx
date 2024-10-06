import { Product } from '../../../interfaces/product.interface'

interface CatalogItemsInterface {
	products: Product[]
	Component: React.ComponentType<React.PropsWithChildren<{ product: Product }>>
	sx?: React.CSSProperties
}

export const CatalogItems = ({ products, Component, sx }: CatalogItemsInterface) => (
	<div style={sx}>
		{products.length > 0 ? (
			products.map((product) => <Component key={product._id} product={product} />)
		) : (
			<p>Няма намерени книги</p>
		)}
	</div>
)
