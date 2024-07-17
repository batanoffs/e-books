import { List, Datagrid, TextField, NumberField, ArrayField } from 'react-admin';

const OrdersList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="userId" label="Идентификатор на потребител" />
            <ArrayField source="books" label="Книги">
                <Datagrid>
                    <TextField source="bookId" label="Идентификатор на книга" />
                    <NumberField source="quantity" label="Количество" />
                </Datagrid>
            </ArrayField>
            <NumberField source="total" label="Обща сума" />
            <TextField source="status" label="Статус" />
        </Datagrid>
    </List>
);

export default OrdersList;


