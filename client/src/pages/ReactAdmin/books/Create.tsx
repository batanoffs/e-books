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

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const BookCreate = (props) => {
    const [files, setFiles] = useState([]);
    const notify = useNotify();
    const redirect = useRedirect();
    const dataProvider = useDataProvider();

    const handlerFileUpdates = (files) => {
        setFiles(files);
    };

    const handleSave = async (values) => {
        try {
            const images = files.map((file) => ({
                file,
            }));

            const data = {
                ...values,
                images,
            };

            await dataProvider.create('books', { data });

            notify('Book created successfully');
            redirect('/books');
        } catch (error) {
            console.error(error);
            notify('Error creating book', { type: 'error' });
        }
    };
    return (
        <Create {...props} title={'Добавяне на нова книга'}>
            <SimpleForm onSubmit={handleSave}>
                <Box display={{ xs: 'block', sm: 'flex' }} sx={{ width: '100%', gap: 2 }}>
                    <Box>
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
                            onupdatefiles={handlerFileUpdates}
                            allowMultiple={false}
                            name="images"
                            className={'filepond'}
                            allowReorder={true}
                            allowDrop={true}
                            allowReplace={true}
                            storeAsFile={true}
                            maxFileSize="5MB"
                        />

                        {/* <ImageInput
                        accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                        source="images"
                        validate={[required()]}
                        maxSize={5000000}
                        label="Изображение"
                        multiple={true}
                        placeholder="Изберете изображение или провлачете, за да го добавите."
                    >
                        <ImageField source="src" title="images" />
                    </ImageInput> */}
                    </Box>
                    <Box>
                        <TextInput source="publisher" label="Издателство" />
                        <TextInput source="language" label="Език" />
                        <DateInput source="publishDate" label="Год на издаване" />
                        <NumberInput source="pagesCount" label="Брой страници" />
                        <TextInput source="translator" label="Преводач" />
                        <TextInput source="dimensions" label="Размери" />
                        <TextInput source="coverPageType" label="Вид корица" />
                    </Box>
                </Box>
            </SimpleForm>
        </Create>
    );
};

export default BookCreate;
