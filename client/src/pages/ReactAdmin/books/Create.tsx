import { useState, useEffect, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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

import CreateCategory from './CreateCategory'

// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
// import FilePondPluginImageResize from 'filepond-plugin-image-resize'
// import { FilePond, registerPlugin } from 'react-filepond'
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// import 'filepond/dist/filepond.min.css'
// registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize)

const BookCreate = (props) => {
	// const [files, setFiles] = useState([])
	const notify = useNotify()
	const redirect = useRedirect()
	const dataProvider = useDataProvider()

	const handleSave = async (values) => {
		try {
			console.log(values.picture)
			console.log(values)

			const data = {
				...values,
			}

			await dataProvider.create('books', { data })

			notify('Успешно създадена книга', { type: 'success' })
			redirect('/admin/books')
		} catch (error) {
			console.error(error)
			notify('Грешка при създаване', { type: 'error' })
		}
	}
	// const handleSave = async (values) => {
	// 	try {
	// 		const cover = files.map((file) => {
	// 			return {
	// 				data: file.getFileEncodeBase64String(),
	// 				type: file.source.type,
	// 			}
	// 		})

	// 		console.log(values)

	// 		const data = {
	// 			...values,
	// 			cover: JSON.stringify(cover),
	// 		}

	// 		await dataProvider.create('books', { data })

	// 		notify('Успешно създадена книга', { type: 'success' })
	// 		redirect('/admin/books')
	// 	} catch (error) {
	// 		console.error(error)
	// 		notify('Грешка при създаване', { type: 'error' })
	// 	}
	// }

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
						<ImageInput source='file' label='Related pictures'>
							<ImageField source='src' title='title' />
						</ImageInput>

						{/* <FilePond
							files={files}
							onupdatefiles={setFiles}
							allowMultiple={false}
							name='cover'
							stylePanelLayout={'compact'}
							className='filepond'
							imageResizeTargetWidth={150}
							imageResizeTargetHeight={100}
							labelIdle='Провлачете снимка или <span class="filepond--label-action">Потърсете</span>'
							allowReorder={true}
							allowDrop={true}
							allowReplace={true}
							allowFileEncode={true}
							allowImageResize={true}
							storeAsFile={true}
							maxFileSize='5MB'
							imagePreviewMaxFileSize='5MB'
						/> */}
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

export default BookCreate
