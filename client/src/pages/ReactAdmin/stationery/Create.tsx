import {
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	required,
	useNotify,
	useRedirect,
	useDataProvider,
	ReferenceArrayInput,
	AutocompleteArrayInput,
	ImageInput,
	ImageField,
} from 'react-admin'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import CreateCategory from '../books/CreateCategory'
import { imageService } from '../../../services/imageService'

export const StationeryCreate = (props) => {
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
		<Create {...props} title={'Добавяне на нови канцеларски материали'}>
			<Typography
				sx={{
					marginTop: 2,
					textAlign: 'center',
					fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' },
				}}
			>
				Добавяне на нов артикул
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
							<TextInput source='dimensions' label='Размери' />
							<ReferenceArrayInput
								reference='categories/stationery'
								source='categories'
								sort={{ field: 'name', order: 'ASC' }}
								validate={[required()]}
							>
								<AutocompleteArrayInput
									debounce={1000}
									// filterToQuery={(search) => ({ name: `%${search}%` })}
									// choices={categoriesMap.get('book')}
									create={<CreateCategory categoryType={'stationery'} />}
									label='Категории'
									createLabel='Добави категория'
									optionText='name'
									optionValue='id'
								/>
							</ReferenceArrayInput>
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
