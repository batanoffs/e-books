import { Edit, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin';

const ItemsEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title" label="Заглавие" />
                <NumberInput source="price" label="Цена" />
                <TextInput source="description" multiline label="Описание" />
                <TextInput source="imageUrl" label="URL на изображение" />
                <NumberInput source="stock" label="Наличност" />
                <SelectInput source="category" choices={[]} label="Категория" />
            </SimpleForm>
        </Edit>
    );
};

export default ItemsEdit;

