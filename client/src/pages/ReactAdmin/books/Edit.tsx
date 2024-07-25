import React from 'react';
import {
    EditProps,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    SelectInput,
    DateInput,
} from 'react-admin';

/**
 * Book edit params.
 *
 * @param {EditProps} props - The React Admin Edit component props.
 * @returns {React.ReactElement} The rendered Edit component.
 */
const BookEdit: React.FC<EditProps> = (props: EditProps): React.ReactElement => {
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
                        { id: 'Self-Help', name: 'Самопомощ' },
                        { id: 'Business', name: 'Бизнес' },
                        { id: 'Fiction', name: 'Фантастика' },
                        { id: 'Spirituality', name: 'Духовност' },
                        { id: 'Poetry', name: 'Поезия' },
                    ]}
                />
                <TextInput source="publisher" label="Издателство" />
                <TextInput source="language" label="Език" />
                <DateInput source="yearPublished" label="Год на издаване" />
                <NumberInput source="pages" label="Страници" />
                <TextInput source="translator" label="Преводач" />
                <TextInput source="dimensions" label="Размери" />
                <TextInput source="coverPageType" label="Вид корица" />
            </SimpleForm>
        </Edit>
    );
};

export default BookEdit;
