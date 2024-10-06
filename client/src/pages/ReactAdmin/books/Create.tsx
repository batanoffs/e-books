import {
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	required,
	useNotify,
	useRedirect,
	useDataProvider,
	SelectInput,
	ReferenceArrayInput,
	AutocompleteArrayInput,
	DateInput,
	ImageInput,
	ImageField,
} from 'react-admin'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import CreateCategory from './CreateCategory'
import { imageService } from '../../../services/imageService'

export const BookCreate = (props) => {
	const notify = useNotify()
	const redirect = useRedirect()
	const dataProvider = useDataProvider()

	const handleSave = async (values) => {
		const { picture, ...restValues } = values

		try {
			const uploadResponse = await imageService.uploadImage(values.picture.rawFile)
			const data = {
				picture: uploadResponse,
				...restValues,
			}

			const response = await dataProvider.create('books', { data })

			notify('Успешно създадена книга', { type: 'success' })
			redirect('/admin/books')
		} catch (error) {
			console.error(error)
			notify('Грешка при създаване', { type: 'error' })
		}
	}

	return (
		<Create {...props} title={'Добавяне на нова книга'}>
			<Typography
				sx={{
					marginTop: 2,
					textAlign: 'center',
					fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' },
				}}
			>
				Добавяне на нова книга
			</Typography>

			<div
				style={{
					margin: '10px',
					height: 1,
					width: '100%',
					backgroundColor: 'gray',
				}}
			/>
			<SimpleForm onSubmit={handleSave}>
				<Box
					display={{ xs: 'block', sm: 'flex' }}
					columnGap={8}
					sx={{ width: '100%', paddingX: 10 }}
				>
					<Box display={'block'} sx={{ flex: 1, flexBasis: '60%' }}>
						<ImageInput source='picture' label='Related pictures'>
							<ImageField source='src' title='title' />
						</ImageInput>
					</Box>
					<Box sx={{ width: '100%' }}>
						<Box
							sx={{
								width: '100%',
								display: 'grid',
								gridTemplateColumns: 'repeat(2, 1fr)',
								columnGap: 2,
							}}
						>
							<TextInput source='title' validate={[required()]} label='Заглавие' />
							<TextInput source='author' validate={[required()]} label='Автор' />
							<NumberInput source='price' validate={[required()]} label='Цена' />
							<NumberInput
								source='stock'
								validate={[required()]}
								label='Брой на склад'
							/>
						</Box>

						<Box
							sx={{
								width: '100%',
								display: 'grid',
								gridTemplateColumns: 'repeat(2, 1fr)',
								columnGap: 2,
							}}
						>
							<TextInput
								source='publisher'
								validate={[required()]}
								label='Издателство'
							/>
							<TextInput source='language' label='Език' />
							<TextInput source='translator' label='Преводач' />
							<TextInput source='dimensions' label='Размери' />
							<SelectInput
								source='coverPageType'
								label='Корица'
								choices={[
									{ id: 'твърда', name: 'твърда' },
									{ id: 'мека', name: 'мека' },
								]}
								optionText='name'
								resettable
							/>
							<ReferenceArrayInput
								reference='categories/books'
								source='categories'
								sort={{ field: 'name', order: 'ASC' }}
								validate={[required()]}
							>
								<AutocompleteArrayInput
									debounce={1000}
									// filterToQuery={(search) => ({ name: `%${search}%` })}
									// choices={categoriesMap.get('book')}
									create={<CreateCategory categoryType={'books'} />}
									label='Категории'
									createLabel='Добави категория'
									optionText='name'
									optionValue='id'
								/>
							</ReferenceArrayInput>

							<NumberInput source='pageCount' label='Брой страници' />
							<DateInput source='publishDate' label='Год на издаване' />
						</Box>
						<Box
							sx={{
								width: '100%',
								display: 'grid',
								gridTemplateColumns: 'repeat(1, 1fr)',
								columnGap: 2,
							}}
						>
							<TextInput
								multiline
								rows={8}
								source='description'
								validate={[required()]}
								label='Описание'
							/>
						</Box>
					</Box>
				</Box>
			</SimpleForm>
		</Create>
	)
}
