import { Create, SimpleForm, TextInput, NumberInput, required } from 'react-admin';

const ItemsCreate = (props) => (
    <Create {...props} title={'Добавяне на нови канцеларски материали'}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} label="Заглавие" />
            <NumberInput source="price" validate={[required()]} label="Цена" />
            <TextInput multiline source="description" validate={[required()]} label="Описание" />
            <TextInput source="imageUrl" validate={[required()]} label="Изображение" />
            <TextInput source="category" validate={[required()]} label="Категория" />
            <NumberInput source="stock" defaultValue={0} validate={[required()]} label="Количество" />
        </SimpleForm>
    </Create>
);

export default ItemsCreate;

