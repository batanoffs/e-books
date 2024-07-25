import { List, Datagrid, TextField, NumberField, ImageField, Filter, TextInput } from 'react-admin';

const BookFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const BookList = (props: any) => (
    <List {...props} filters={<BookFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" sortable={true} />
            <TextField source="title" label="Заглавие" sortable={true} />
            <TextField source="author" label="Автор" sortable={true} />
            <NumberField source="price" label="Цена" sortable={true} />
            <TextField source="description" label="Описание" sortable={false} />
            <ImageField source="imageUrl" label="Изображение" sortable={false} />
            <NumberField source="stock" label="Количество" sortable={true} />
            <TextField source="category" label="Категория" sortable={true} />
        </Datagrid>
    </List>
);

export default BookList;
