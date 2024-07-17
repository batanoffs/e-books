import { List, Datagrid, TextField, NumberField, ImageField } from 'react-admin';

const FeaturedList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <TextField source="title" label="Заглавие" />
            <TextField source="author" label="Автор" />
            <NumberField source="price" label="Цена" />
            <TextField source="description" label="Описание" />
            <ImageField source="imageUrl" label="Изображение" />
            <NumberField source="stock" label="Количество" />
            <TextField source="category" label="Категория" />
        </Datagrid>
    </List>
);

export default FeaturedList;
