import { Show, ShowProps, Labeled, TextField, NumberField, DateField } from 'react-admin'
import { CustomCoverImage } from './CustomCoverImage'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

/**
 * A component that shows the details of a book.
 *
 * @param props - The props for the component.
 * @param props.id - The ID of the book to show.
 * @param props.resource - The resource to show.
 * @param props.basePath - The base path for the resource.
 * @returns The rendered component.
 */

const BookShow = (props: ShowProps) => {
	return (
		<Show {...props}>
			<Typography
				sx={{
					marginTop: 2,
					textAlign: 'center',
					fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' },
				}}
			>
				Преглед на книга {props.resource?.title && `"${props.resource?.title}"`}
			</Typography>

			<div
				style={{
					margin: '10px',
					height: 1,
					width: '100%',
					backgroundColor: 'gray',
				}}
			/>
			<Box
				display={{ xs: 'block', sm: 'flex' }}
				columnGap={8}
				sx={{ width: '100%', padding: 4 }}
			>
				<Box display={'block'} sx={{ flex: 0, flexBasis: '20%' }}>
					<Labeled color='#6028c8'>
						<CustomCoverImage imgWidth='' />
					</Labeled>
				</Box>
				<Box sx={{ width: '100%', flex: 1 }}>
					<Box
						sx={{
							width: '100%',
							display: 'grid',
							gridTemplateColumns: 'repeat(2, 1fr)',
							gap: 2,
						}}
					>
						<Labeled color='#6028c8'>
							<TextField source='id' label='ID' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='title' label='Заглавие' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='author' label='Автор' />
						</Labeled>

						<Labeled color='#6028c8'>
							<NumberField source='price' label='Цена' />
						</Labeled>

						<Labeled color='#6028c8'>
							<NumberField source='stock' label='Брой на склад' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='categories' label='Категория' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='publisher' label='Издателство' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='language' label='Език' />
						</Labeled>

						<Labeled color='#6028c8'>
							<DateField source='publishDate' label='Издадена на' />
						</Labeled>

						<Labeled color='#6028c8'>
							<NumberField source='pageCount' label='Страници' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='translator' label='Преводач' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='dimensions' label='Размери' />
						</Labeled>

						<Labeled color='#6028c8'>
							<TextField source='coverPageType' label='Корица' />
						</Labeled>
					</Box>
					<Box
						sx={{
							width: '100%',
							display: 'grid',
							gridTemplateColumns: 'repeat(1, 1fr)',
							gap: 2,
						}}
					>
						<Labeled color='#6028c8'>
							<TextField source='description' label='Описание' />
						</Labeled>
					</Box>
				</Box>
			</Box>
		</Show>
	)
}

export default BookShow
