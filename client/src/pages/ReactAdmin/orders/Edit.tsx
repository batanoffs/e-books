import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, useRecordContext, ArrayInput, SimpleFormIterator } from 'react-admin';

const OrdersEdit = (props) => {
    const record = useRecordContext();

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="userId" />
                <SelectInput source="status" choices={[
                    { id: 'pending', name: 'pending' },
                    { id: 'shipped', name: 'shipped' },
                    { id: 'delivered', name: 'delivered' }
                ]} />
                <NumberInput source="total" />
                <ArrayInput source="books">
                    <SimpleFormIterator>
                        <TextInput source="bookId" />
                        <NumberInput source="quantity" />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default OrdersEdit;

