import React from 'react';
import {
    Show,
    ShowProps,
    SimpleShowLayout,
    TextField,
    ImageField,
    NumberField,
    DateField,
} from 'react-admin';

/**
 * A component that shows the details of a book.
 *
 * @param props - The props for the component.
 * @param props.id - The ID of the book to show.
 * @param props.resource - The resource to show.
 * @param props.basePath - The base path for the resource.
 * @returns The rendered component.
 */
const BookShow: React.FC<ShowProps> = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" label="ID" hidden/>
            <TextField source="title" label="Заглавие" />
            <TextField source="author" label="Автор" />
            <NumberField source="price" label="Цена" />
            <TextField source="description" label="Описание" />
            <ImageField source="images" label="Изображение" />
            <NumberField source="stock" label="Бр на склад" />
            <TextField source="category" label="Категория" />
            <TextField source="publisher" label="Издателство" />
            <TextField source="language" label="Език" />
            <DateField source="yearPublished" label="Година на издаване" />
            <NumberField source="pages" label="Страници" />
            <TextField source="translator" label="Преводач" />
            <TextField source="dimensions" label="Размери" />
            <TextField source="coverPageType" label="Корица" />
        </SimpleShowLayout>
    </Show>
);

export default BookShow;
