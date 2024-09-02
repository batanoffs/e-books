import { useEffect, useState } from 'react'
import {
	EditProps,
	Edit,
	SimpleForm,
	TextInput,
	required,
	NumberInput,
	ReferenceArrayInput,
	SelectArrayInput,
	ArrayInput,
	ReferenceManyField,
	Datagrid,
	TextField,
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
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'

import CustomCoverImage from './CustomCoverImage'
import CreateCategory from './CreateCategory'
import useCategoryStore from '../../../store/categories'

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize)

/**
 * Book edit params.
 *
 * @param {EditProps} props - The React Admin Edit component props.
 */

const BookEdit = (props: EditProps) => {
	const [files, setFiles] = useState([])
	const [newCover, setNewCover] = useState('')
	const dataProvider = useDataProvider()
	const id = useGetRecordId()
	const notify = useNotify()
	const redirect = useRedirect()

	// const setCategories = useCategoryStore((state) => state.setCategories)
	// const categoriesMap = useCategoryStore((state) => state.categoriesMap)

	useEffect(() => {
		if (files && files.length > 0) {
			setNewCover(files[0].getFileEncodeDataURL())
		}
	}, [files])

	const handleUpdate = async (values: any) => {
		let data
		try {
			console.log('handleUpdate: ', values)
			if (files[0]) {
				const { source, getFileEncodeBase64String } = files[0]
				data = {
					...values,
					cover: JSON.stringify({
						data: getFileEncodeBase64String(),
						type: source.type,
					}),
				}
			}

			if (!files[0]) data = { ...values }

			await dataProvider.update('books', { id, data })
			notify('Book updated successfully')
			redirect(`/admin/books/${id}/show`)
		} catch (error) {
			console.error(error)
			notify('Error updating book', { type: 'error' })
		}
	}

	// const handleCreateCategory = async (e) => {
	// 	e.preventDefault()

	// 	const { value } = e.target

	// 	if (!value) return
	// 	console.log('handleCreateCategory: ', value)

	// 	// try {
	// 	// 	const response = await dataProvider.create(`categories/books`, {
	// 	// 		data: { name: value },
	// 	// 	})

	// 	// 	console.log(response.data)
	// 	// 	notify('Усшено добавихте нова категория', { type: 'success' })
	// 	// } catch (error) {
	// 	// 	console.error(error)
	// 	// 	notify('Грешка при създаване на категория', { type: 'error' })
	// 	// }
	// }

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
						<CustomCoverImage
							imageTitle={true}
							newCover={newCover}
							setNewCover={setNewCover}
							imgWidth='50%'
						/>
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
							{/* <TextInput source='coverPageType' label='Вид корица' /> */}

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
							{/* TODO show current categories*/}
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

export default BookEdit
