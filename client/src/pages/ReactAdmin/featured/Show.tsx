import React from 'react';
import { Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';

const FeaturedShow: React.FC = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" label="id" />
            <TextField source="title" label="Заглавие" />
            <TextField source="author" label="Автор" />
            <NumberField source="price" label="Цена" />
            <TextField source="description" label="Описание" />
            <TextField source="imageUrl" label="Изображение" />
            <NumberField source="stock" label="Количество" />
            <TextField source="category" label="Категория" />
        </SimpleShowLayout>
    </Show>
);

export default FeaturedShow;