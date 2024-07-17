import { List, Datagrid, TextField, NumberField, ArrayField } from 'react-admin';

const OrdersList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="userId" label="User ID" />
            <ArrayField source="books" label="Books">
                <Datagrid>
                    <TextField source="bookId" label="Book ID" />
                    <NumberField source="quantity" label="Quantity" />
                </Datagrid>
            </ArrayField>
            <NumberField source="total" label="Total" />
            <TextField source="status" label="Status" />
        </Datagrid>
    </List>
);

export default OrdersList;

