interface Item {
	_id: string
	[key: string]: unknown
}

interface CatalogItems {
	items: Item[]
	CardComponent: React.ComponentType<React.PropsWithChildren<{ item: Item }>>
	sx?: React.CSSProperties
}

export const CatalogItems = ({ items, CardComponent, sx }: CatalogItems) => (
	<div style={sx}>
		{items.length > 0 ? (
			items.map((item) => <CardComponent key={item._id} item={item} />)
		) : (
			<p>Няма намерени книги</p>
		)}
	</div>
)
