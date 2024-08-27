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

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize)

/**
 * Book edit params.
 *
 * @param {EditProps} props - The React Admin Edit component props.
 */

const BookEdit = (props: EditProps) => {
	const [files, setFiles] = useState([])
	const [newCover, setNewCover] = useState('')
	const id = useGetRecordId()
	const notify = useNotify()
	const redirect = useRedirect()
	const dataProvider = useDataProvider()

	useEffect(() => {
		if (files && files.length > 0) {
			setNewCover(files[0].getFileEncodeDataURL())
		}
	}, [files])

	const handleUpdate = async (values: any) => {
		try {
			let cover

			if (files[0]) {
				const { source, getFileEncodeBase64String, file } = files[0]

				cover = {
					data: getFileEncodeBase64String(),
					type: source.type,
				}
			}
			//Todo add file name to backend
			console.log('values:', values)

			const data = {
				...values,
				cover: JSON.stringify(cover),
			}

			const response = await dataProvider.update('books', { id, data })
			console.log('response:', response)

			notify('Book updated successfully')
			redirect(`/admin/books/${id}/show`)
		} catch (error) {
			console.error(error)
			notify('Error updating book', { type: 'error' })
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
							<ReferenceArrayInput
								source='categories'
								reference='categories'
								validate={[required()]}
								label='Категория'
							>
								<SelectArrayInput
									source='categories'
									create={<CreateCategory categoryType={'book'} />}
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
