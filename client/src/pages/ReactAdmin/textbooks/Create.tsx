import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, required } from 'react-admin';

const TextbookCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} />
            <TextInput source="author" validate={[required()]} />
            <NumberInput source="price" validate={[required()]} />
            <TextInput multiline source="description" validate={[required()]} />
            <TextInput source="imageUrl" validate={[required()]} />
            <NumberInput source="stock" defaultValue={0} validate={[required()]} />
            <TextInput source="category" validate={[required()]} />
        </SimpleForm>
    </Create>
);

export default TextbookCreate;
