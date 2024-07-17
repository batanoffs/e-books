import { Create, SimpleForm, TextInput, NumberInput, required } from 'react-admin';

const ItemsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} />
            <NumberInput source="price" validate={[required()]} />
            <TextInput multiline source="description" validate={[required()]} />
            <TextInput source="imageUrl" validate={[required()]} />
            <TextInput source="category" validate={[required()]} />
            <NumberInput source="stock" defaultValue={0} validate={[required()]} />
        </SimpleForm>
    </Create>
);

export default ItemsCreate;
