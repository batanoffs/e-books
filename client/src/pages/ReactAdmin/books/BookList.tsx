import { List, Datagrid, TextField, NumberField, ImageField } from 'react-admin';

const BookList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <TextField source="title" label="Title" />
            <TextField source="author" label="Author" />
            <NumberField source="price" label="Price" />
            <TextField source="description" label="Description" />
            <ImageField source="imageUrl" label="Image" />
            <NumberField source="stock" label="Stock" />
            <TextField source="category" label="Category" />
        </Datagrid>
    </List>
);

export default BookList;
