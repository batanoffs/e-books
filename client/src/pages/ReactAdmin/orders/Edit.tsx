import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, useRecordContext, ArrayInput, SimpleFormIterator } from 'react-admin';

const OrdersEdit = (props) => {
    const record = useRecordContext();

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="userId" label="id потребител" />
                <SelectInput
                    source="status"
                    label="Статус"
                    choices={[
                        { id: 'pending', name: 'чакащ' },
                        { id: 'shipped', name: 'изпратен' },
                        { id: 'delivered', name: 'получен' }
                    ]}
                />
                <NumberInput source="total" label="Обща цена" />
                <ArrayInput source="books" label="Книги">
                    <SimpleFormIterator>
                        <TextInput source="bookId" label="id книга" />
                        <NumberInput source="quantity" label="Количество" />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default OrdersEdit;

