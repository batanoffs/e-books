import { Show, SimpleShowLayout, TextField, NumberField, ArrayField, Datagrid } from 'react-admin';

const OrdersShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="userId" />
            <TextField source="status" />
            <NumberField source="total" />
            <ArrayField source="books">
                <Datagrid rowClick="show">
                    <TextField source="bookId" />
                    <NumberField source="quantity" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

export default OrdersShow;
