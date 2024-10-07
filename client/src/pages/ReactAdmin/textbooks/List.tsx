import {
	List,
	Datagrid,
	TextField,
	NumberField,
	DateField,
	Filter,
	TextInput,
	useFieldValue,
	ReferenceManyField,
	SingleFieldList,
	ChipField,
} from 'react-admin'
import CustomCoverImage from '../books/CustomCoverImage'

const BookFilter = (props: any) => (
	<Filter {...props}>
		<TextInput label='Търсене...' source='q' alwaysOn />
	</Filter>
)

export const TextbookList = (props: any) => {
	const title = useFieldValue({ source: 'title' })
	console.log('title:', title)
	return (
		<List {...props} title='Книги' filters={<BookFilter />}>
			<Datagrid rowClick='edit' style={{ overflow: 'auto' }}>
				<CustomCoverImage imgWidth='50px' />
				<TextField
					source='title'
					label='Заглавие'
					sortable={true}
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
						maxWidth: '100px',
					}}
				/>
				<TextField
					source='author'
					label='Автор'
					sortable={true}
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
						maxWidth: '100px',
					}}
				/>
				<NumberField
					source='price'
					label='Цена(лв.)'
					sortable={true}
					style={{ maxWidth: '100px' }}
				/>
				<TextField
					source='description'
					label='Описание'
					sortable={false}
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
						maxWidth: '400px',
					}}
				/>
				<NumberField
					source='stock'
					label='Наличност(бр.)'
					sortable={true}
					style={{ maxWidth: '150px' }}
				/>
				<ReferenceManyField
					label='Категории'
					reference='categories/textbooks' // Reference to the categories collection
					source='categories' // Path to the array of category IDs
					target='id'
				>
					<SingleFieldList>
						<ChipField source='name' />
					</SingleFieldList>
				</ReferenceManyField>
				<TextField
					source='publisher'
					label='Издателство'
					sortable={false}
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
						maxWidth: '300px',
					}}
				/>
				<DateField
					source='publishDate'
					label='Издадена на(дата)'
					sortable={false}
					style={{ maxWidth: '200px' }}
				/>
				<TextField
					source='translator'
					label='Преводач'
					sortable={false}
					style={{ maxWidth: '300px' }}
				/>
				<DateField
					source='createdAt'
					label='Създадена на(дата)'
					sortable={false}
					style={{ maxWidth: '200px' }}
				/>
			</Datagrid>
		</List>
	)
}
