import { useState } from 'react';

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
} from 'react-admin';
import { Box } from '@mui/material';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize);

const BookCreate = (props) => {
    const [files, setFiles] = useState([]);
    const notify = useNotify();
    const redirect = useRedirect();
    const dataProvider = useDataProvider();

    const handleSave = async (values) => {
        // console.log('handleSave values:', values);
        // console.log('handleSave values:', files[0]);
        // console.log('handleSave values:', files[0]);

        // console.log('getFileEncodeBase64String values:', files[0].getFileEncodeBase64String());
        // console.log('handleSave setFile:', files[0].setFile());
        // console.log('handleSave getFileEncodeDataURL:', files[0].getFileEncodeDataURL());
        // console.log('handleSave getMetadata:', files[0].getMetadata());
        // console.log('handleSave setMetadata:', files[0].setMetadata());

        try {
            const cover = files.map((file) => {
                console.log('file:', file);

                return {
                    data: file.getFileEncodeBase64String(),
                    type: file.source.type,
                };
            });

            console.log('encoded values of cover images:', cover);

            const data = {
                ...values,
                cover: JSON.stringify(cover[0]), // Ensure only one cover image is sent
            };

            console.log('handleSave data:', data);

            const response = await dataProvider.create('books', { data });
            console.log('response:', response);

            notify('Book created successfully');
            redirect('/admin/books');
        } catch (error) {
            console.error(error);
            notify('Error creating book', { type: 'error' });
        }
    };
    return (
        <Create {...props} title={'Добавяне на нова книга'}>
            <SimpleForm onSubmit={handleSave}>
                <Box display={{ xs: 'block', sm: 'flex' }} sx={{ width: '100%', gap: 2 }}>
                    <div>
                        <TextInput source="title" validate={[required()]} label="Заглавие" />
                        <TextInput source="author" validate={[required()]} label="Автор" />
                        <NumberInput source="price" validate={[required()]} label="Цена" />
                        <TextInput
                            multiline
                            source="description"
                            validate={[required()]}
                            label="Описание"
                        />

                        <NumberInput
                            source="stock"
                            defaultValue={0}
                            validate={[required()]}
                            label="Брой на склад"
                        />
                        <TextInput source="category" validate={[required()]} label="Категория" />

                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={false}
                            name="cover"
                            stylePanelLayout={'compact'}
                            className="filepond"
                            imageResizeTargetWidth={150}
                            imageResizeTargetHeight={100}
                            labelIdle='Провлачете снимка или <span class="filepond--label-action">Потърсете</span>'
                            allowReorder={true}
                            allowDrop={true}
                            allowReplace={true}
                            allowFileEncode={true}
                            allowImageResize={true}
                            storeAsFile={true}
                            maxFileSize="5MB"
                            imagePreviewMaxFileSize="5MB"
                        />
                    </div>
                    <div>
                        <TextInput source="publisher" label="Издателство" />
                        <TextInput source="language" label="Език" />
                        <DateInput source="publishDate" label="Год на издаване" />
                        <NumberInput source="pageCount" label="Брой страници" />
                        <TextInput source="translator" label="Преводач" />
                        <TextInput source="dimensions" label="Размери" />
                        <TextInput source="coverPageType" label="Вид корица" />
                    </div>
                </Box>
            </SimpleForm>
        </Create>
    );
};

export default BookCreate;
