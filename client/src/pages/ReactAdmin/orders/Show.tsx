import { Show, SimpleShowLayout, TextField, NumberField, ArrayField, Datagrid } from 'react-admin';

const OrdersShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="userId" label="Идентификатор на потребител" />
            <TextField source="status" label="Статус" />
            <NumberField source="total" label="Обща сума" />
            <ArrayField source="books" label="Книги">
                <Datagrid rowClick="show">
                    <TextField source="bookId" label="Идентификатор на книга" />
                    <NumberField source="quantity" label="Количество" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

export default OrdersShow;

