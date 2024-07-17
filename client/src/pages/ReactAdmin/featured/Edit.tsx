import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    SelectInput,
    useRecordContext,
} from 'react-admin';

const FeaturedEdit: React.FC = (props) => {
    const record = useRecordContext();

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title" label="Заглавие" />
                <TextInput source="author" label="Автор" />
                <NumberInput source="price" label="Цена" />
                <TextInput source="description" multiline label="Описание" />
                <TextInput source="imageUrl" label="Изображение" />
                <NumberInput source="stock" label="Количество" />
                <SelectInput
                    source="category"
                    label="Категория"
                    choices={[
                        { id: 'Self-Help', name: 'Self-Help' },
                        { id: 'Business', name: 'Business' },
                        { id: 'Fiction', name: 'Fiction' },
                        { id: 'Spirituality', name: 'Spirituality' },
                        { id: 'Poetry', name: 'Poetry' },
                    ]}
                />
            </SimpleForm>
        </Edit>
    );
};

export default FeaturedEdit;
