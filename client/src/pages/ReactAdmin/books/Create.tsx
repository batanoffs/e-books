import {
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	required,
	DateInput,
	useNotify,
	useRedirect,
	useDataProvider,
	ReferenceArrayInput,
	SelectArrayInput,
} from 'react-admin'
import { useState, useEffect } from 'react'

import Box from '@mui/material/Box'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize)

const BookCreate = (props) => {
	const [files, setFiles] = useState([])
	const [categories, setCategories] = useState([])
	const notify = useNotify()
	const redirect = useRedirect()
	const dataProvider = useDataProvider()

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				// Fetch categories using dataProvider
				const { data } = await dataProvider.getList('categories', {
					filter: { categoryType: 'book' },
					pagination: { page: 1, perPage: 100 },
					sort: { field: 'name', order: 'ASC' },
				})
				setCategories(data)
			} catch (error) {
				console.error('Error fetching categories:', error)
			}
		}

		fetchCategories()
	}, [dataProvider])

	const handleSave = async (values) => {
		try {
			const cover = files.map((file) => {
				return {
					data: file.getFileEncodeBase64String(),
					type: file.source.type,
				}
			})

			const data = {
				...values,
				cover: JSON.stringify(cover[0]), // Ensure only one cover image is sent
			}

			const response = await dataProvider.create('books', { data })

			notify('Усшено създадна книга', { type: 'success' })
			redirect('/admin/books')
		} catch (error) {
			console.error(error)
			notify('Грешка при създаване', { type: 'error' })
		}
	}
	return (
		<Create {...props} title={'Добавяне на нова книга'}>
			<SimpleForm onSubmit={handleSave}>
				<Box display={{ xs: 'block', sm: 'flex' }} sx={{ width: '100%', gap: 2 }}>
					<div>
						<TextInput source='title' validate={[required()]} label='Заглавие' />
						<TextInput source='author' validate={[required()]} label='Автор' />
						<NumberInput source='price' validate={[required()]} label='Цена' />
						<TextInput
							multiline
							source='description'
							validate={[required()]}
							label='Описание'
						/>

						<NumberInput
							source='stock'
							defaultValue={0}
							validate={[required()]}
							label='Брой на склад'
						/>
						<ReferenceArrayInput
							source='categories'
							reference='categories'
							validate={[required()]}
							label='Category'
						>
							<SelectArrayInput optionText='name' />
						</ReferenceArrayInput>
						<FilePond
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
						/>
					</div>
					<div>
						<TextInput source='publisher' label='Издателство' />
						<TextInput source='language' label='Език' />
						<DateInput source='publishDate' label='Год на издаване' />
						<NumberInput source='pageCount' label='Брой страници' />
						<TextInput source='translator' label='Преводач' />
						<TextInput source='dimensions' label='Размери' />
						<TextInput source='coverPageType' label='Вид корица' />
					</div>
				</Box>
			</SimpleForm>
		</Create>
	)
}

export default BookCreate
