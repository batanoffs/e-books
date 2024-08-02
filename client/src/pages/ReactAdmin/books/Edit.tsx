import { useEffect, useState } from 'react';
import {
    EditProps,
    Edit,
    SimpleForm,
    TextInput,
    required,
    NumberInput,
    DateInput,
    useRedirect,
    useNotify,
    useDataProvider,
    useGetRecordId,
} from 'react-admin';
import { Box } from '@mui/material';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import { CustomCoverImage } from './CustomCoverImage';
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize);

/**
 * Book edit params.
 *
 * @param {EditProps} props - The React Admin Edit component props.
 */

const BookEdit = (props: EditProps) => {
    const [files, setFiles] = useState([]);
    const [newCover, setNewCover] = useState('');
    const id = useGetRecordId();
    const notify = useNotify();
    const redirect = useRedirect();
    const dataProvider = useDataProvider();

    useEffect(() => {
        if (files && files.length > 0) {
            setNewCover(files[0].getFileEncodeDataURL());
        }
    }, [files]);

    const handleUpdate = async (values: any) => {
        try {
            const cover = files.map((file: any) => {
                console.log('image uploaded:', file);

                return {
                    data: file.getFileEncodeBase64String(),
                    type: file.source.type,
                };
            });

            const params = {
                id,
                data: {
                    title: values.title,
                    author: values.author,
                    price: values.price,
                    description: values.description,
                    stock: values.stock,
                    category: values.category,
                    publisher: values.publisher,
                    language: values.language,
                    publishDate: values.publishDate,
                    pageCount: values.pageCount,
                    translator: values.translator,
                    dimensions: values.dimensions,
                    coverPageType: values.coverPageType,
                    cover: JSON.stringify(cover[0]), // Ensure only one cover image is sent
                },
            };

            console.log('sending params:', params);

            const response = await dataProvider.update('books', params);
            console.log('response:', response);

            notify('Book updated successfully');
            redirect(`/admin/books/${id}/show`);
        } catch (error) {
            console.error(error);
            notify('Error updating book', { type: 'error' });
        }
    };
    return (
        <Edit {...props}>
            <SimpleForm onSubmit={handleUpdate}>
                <Box display={{ xs: 'block', sm: 'flex' }} sx={{ width: '100%', gap: 2 }}>
                    <Box sx={{ width: '300px', gap: 2 }}>
                        <CustomCoverImage
                            imageTitle={true}
                            newCover={newCover}
                            setNewCover={setNewCover}
                            imgWidth="300px"
                        />
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowImagePreview={false}
                            allowMultiple={true}
                            name="cover"
                            stylePanelLayout={'compact'}
                            className="filepond"
                            imageResizeTargetWidth={150}
                            imageResizeTargetHeight={100}
                            allowReorder={true}
                            labelIdle='Провлачете снимка или <span class="filepond--label-action">Потърсете</span>'
                            allowDrop={true}
                            allowReplace={true}
                            allowFileEncode={true}
                            allowImageResize={true}
                            storeAsFile={true}
                            maxFileSize="5MB"
                            imagePreviewMaxFileSize="5MB"
                        />
                    </Box>
                    <Box>
                        <TextInput source="title" validate={[required()]} label="Заглавие" />
                        <TextInput source="author" validate={[required()]} label="Автор" />
                        <NumberInput source="price" validate={[required()]} label="Цена" />
                        <NumberInput
                            source="stock"
                            defaultValue={0}
                            validate={[required()]}
                            label="Брой на склад"
                        />
                        <TextInput source="category" validate={[required()]} label="Категория" />
                        <TextInput source="publisher" label="Издателство" />
                        <TextInput source="language" label="Език" />
                        <DateInput source="publishDate" label="Год на издаване" />
                        <NumberInput source="pageCount" label="Брой страници" />
                        <TextInput source="translator" label="Преводач" />
                        <TextInput source="dimensions" label="Размери" />
                        <TextInput source="coverPageType" label="Вид корица" />
                        <TextInput
                            multiline
                            fullWidth
                            minRows={6}
                            maxRows={10}
                            source="description"
                            validate={[required()]}
                            label="Описание"
                        />
                    </Box>
                </Box>
            </SimpleForm>
        </Edit>
    );
};

export default BookEdit;
