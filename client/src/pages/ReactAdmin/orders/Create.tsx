import {
    Create,
    CreateProps,
    SimpleForm,
    NumberInput,
    required,
    ReferenceInput,
    SelectInput,
    ArrayInput,
    SimpleFormIterator,
} from 'react-admin';

/**
 * Render the Create component for Orders with strong types.
 *
 * @param {Omit<CreateProps, 'resource'>} props - The props for the Create component.
 * @returns {React.ReactElement} The rendered Create component.
 */
const OrdersCreate: React.FC<Omit<CreateProps, 'resource'>> = (
    props: Omit<CreateProps, 'resource'>
): React.ReactElement => (
    <Create {...props} title={'Добавяне на нова поръчка (за тестови цели)'}>
        <SimpleForm>
            <ReferenceInput
                source="userId"
                reference="users"
                validate={[required()]}
                label="Потребител"
            >
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ArrayInput source="products" validate={[required()]}>
                <SimpleFormIterator>
                    <ReferenceInput
                        source="productId"
                        reference={(record: { productType: string }) => record.productType}
                        perPage={0}
                        validate={[required()]}
                        label="Книга"
                    >
                        <SelectInput optionText="title" />
                    </ReferenceInput>
                    <SelectInput
                        source="productType"
                        validate={[required()]}
                        label="Тип продукт"
                        choices={[
                            { id: 'Book', name: 'Book' },
                            { id: 'Textbook', name: 'Textbook' },
                            { id: 'Stationery', name: 'Stationery' },
                        ]}
                    />
                    <NumberInput source="quantity" validate={[required()]} label="Количество" />
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput source="total" validate={[required()]} label="Обща цена" />
            <SelectInput
                source="status"
                validate={[required()]}
                label="Статус"
                choices={[
                    { id: 'pending', name: 'pending' },
                    { id: 'shipped', name: 'shipped' },
                    { id: 'delivered', name: 'delivered' },
                ]}
            />
        </SimpleForm>
    </Create>
);

export default OrdersCreate;
