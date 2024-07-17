import { Create, SimpleForm, TextInput, NumberInput, required, ReferenceInput, SelectInput } from 'react-admin';

const OrdersCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput
                source="userId"
                reference="users"
                validate={[required()]}
                label="Потребител"
            >
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput
                source="books"
                reference="books"
                validate={[required()]}
                label="Книга"
            >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <NumberInput source="quantity" validate={[required()]} label="Количество" />
            <NumberInput source="total" validate={[required()]} label="Обща цена" />
            <TextInput source="status" validate={[required()]} label="Статус" />
        </SimpleForm>
    </Create>
);

export default OrdersCreate;


