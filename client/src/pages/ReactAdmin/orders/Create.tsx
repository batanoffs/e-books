import { Create, SimpleForm, TextInput, NumberInput, required, ReferenceInput, SelectInput } from 'react-admin';

const OrdersCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput
                source="userId"
                reference="users"
                validate={[required()]}
            >
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput
                source="books"
                reference="books"
                validate={[required()]}
            >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <NumberInput source="quantity" validate={[required()]} />
            <NumberInput source="total" validate={[required()]} />
            <TextInput source="status" validate={[required()]} />
        </SimpleForm>
    </Create>
);

export default OrdersCreate;

