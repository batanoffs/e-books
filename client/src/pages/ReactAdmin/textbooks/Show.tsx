import React from 'react';
import { Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';

const TextbookShow: React.FC = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="author" />
            <NumberField source="price" />
            <TextField source="description" />
            <TextField source="imageUrl" />
            <NumberField source="stock" />
            <TextField source="category" />
        </SimpleShowLayout>
    </Show>
);

export default TextbookShow;
