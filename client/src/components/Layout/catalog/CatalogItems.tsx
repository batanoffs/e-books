interface Item {
	_id: string
	[key: string]: unknown
}

interface CatalogItemsInterface {
	items: Item[]
	CardComponent: React.ComponentType<React.PropsWithChildren<{ item: Item }>>
	sx?: React.CSSProperties
}

const CatalogItems = ({ items, CardComponent, sx }: CatalogItemsInterface) => (
	<div style={sx}>
		{items.length > 0 ? (
			items.map((item) => <CardComponent key={item._id} item={item} />)
		) : (
			<p>Няма намерени книги</p>
		)}
	</div>
)

export default CatalogItems
