import {
	EditProps,
	Edit,
	SimpleForm,
	TextInput,
	required,
	NumberInput,
	ReferenceArrayInput,
	ImageInput,
	ImageField,
	AutocompleteArrayInput,
	useRedirect,
	useNotify,
	useDataProvider,
	useGetRecordId,
	DateInput,
	SelectInput,
} from 'react-admin'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import CustomCoverImage from './CustomCoverImage'
import CreateCategory from './CreateCategory'
import { imageService } from '../../../services/imageService'

/**
 * Book edit params.
 *
 * @param {EditProps} props - The React Admin Edit component props.
 */

export const BookEdit = (props: EditProps) => {
	const dataProvider = useDataProvider()
	const id = useGetRecordId()
	const notify = useNotify()
	const redirect = useRedirect()

	const handleUpdate = async (values: any) => {
		const { picture, ...restValues } = values

		try {
			const uploadResponse = await imageService.uploadImage(values.picture.rawFile)
			const data = {
				picture: uploadResponse,
				...restValues,
			}

			await dataProvider.update('books', { id, data })
			notify('Успешно обновена книга', { type: 'success' })
			redirect(`/admin/books/${id}/show`)
		} catch (error) {
			console.error(error)
			notify('Грешка при обновяване', { type: 'error' })
		}
	}

	return (
		<Edit {...props} title={'Редактиране на книга'}>
			<Typography
				sx={{
					marginTop: 2,
					textAlign: 'center',
					fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' },
				}}
			>
				Редактиране на книга
			</Typography>

			<div
				style={{
					margin: '10px',
					height: 1,
					width: '100%',
					backgroundColor: 'gray',
				}}
			/>
			<SimpleForm onSubmit={handleUpdate}>
				<Box
					display={{ xs: 'block', sm: 'flex' }}
					columnGap={8}
					sx={{ width: '100%', paddingX: 10 }}
				>
					<Box display={'block'} sx={{ flex: 1, flexBasis: '60%' }}>
						<ImageInput source='picture' label='Related pictures'>
							<ImageField source='src' title='title' />
						</ImageInput>
						<CustomCoverImage imgWidth='200px' />
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
							<TextInput source='publisher' label='Издателство' />
							<TextInput source='language' label='Език' />
							<TextInput source='translator' label='Преводач' />
							<TextInput source='dimensions' label='Размери' />

							<SelectInput
								source='coverPageType'
								label='Вид корица'
								choices={[
									{ id: 'твърда', name: 'твърда' },
									{ id: 'мека', name: 'мека' },
								]}
								optionText='name'
								resettable
							/>
							<ReferenceArrayInput
								reference='categories/books'
								source='id'
								sort={{ field: 'name', order: 'ASC' }}
								validate={[required()]}
							>
								<AutocompleteArrayInput
									debounce={500}
									// filterToQuery={(search) => ({ name: `%${search}%` })}
									label='Категории'
									optionText='name'
									optionValue='id'
									name='categories'
									source='categories'
									createLabel='Добави категория'
									createItemLabel='Нова категория'
									create={<CreateCategory categoryType={'books'} />}
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
								rows={7}
								source='description'
								validate={[required()]}
								label='Описание'
							/>
						</Box>
					</Box>
				</Box>
			</SimpleForm>
		</Edit>
	)
}
