import { List, Datagrid, TextField, NumberField, ImageField } from 'react-admin';

const TextbookList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="Идентификатор" />
            <TextField source="title" label="Заглавие" />
            <TextField source="author" label="Автор" />
            <NumberField source="price" label="Цена" />
            <TextField source="description" label="Описание" />
            <ImageField source="imageUrl" label="Изображение" />
            <NumberField source="stock" label="Наличност" />
            <TextField source="category" label="Категория" />
        </Datagrid>
    </List>
);

export default TextbookList;

