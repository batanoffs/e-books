import {
	Show,
	ShowProps,
	SimpleShowLayout,
	TextField,
	ImageField,
	NumberField,
	DateField,
} from 'react-admin'
import { CustomCoverImage } from './CustomCoverImage'
import Box from '@mui/material/Box'

/**
 * A component that shows the details of a book.
 *
 * @param props - The props for the component.
 * @param props.id - The ID of the book to show.
 * @param props.resource - The resource to show.
 * @param props.basePath - The base path for the resource.
 * @returns The rendered component.
 */

const BookShow = (props: ShowProps) => (
	<Show {...props}>
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<SimpleShowLayout spacing={1}>
				<CustomCoverImage imgWidth='200px' />
				<TextField source='id' label='ID' />
				<TextField source='title' label='Заглавие' />
				<TextField source='author' label='Автор' />
				<NumberField source='price' label='Цена' />
				<TextField source='description' label='Описание' />
			</SimpleShowLayout>
			<SimpleShowLayout spacing={1}>
				<NumberField source='stock' label='Бр на склад' />
				<TextField source='category' label='Категория' />
				<TextField source='publisher' label='Издателство' />
				<TextField source='language' label='Език' />
				<DateField source='yearPublished' label='Издадена на' />
				<NumberField source='pages' label='Страници' />
				<TextField source='translator' label='Преводач' />
				<TextField source='dimensions' label='Размери' />
				<TextField source='coverPageType' label='Корица' />
			</SimpleShowLayout>
		</Box>
	</Show>
)

export default BookShow
