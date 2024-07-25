import {
    EditProps,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
    ArrayInput,
    SimpleFormIterator,
    useRecordContext,
} from 'react-admin';

type Product = {
    productId: string;
    productType: 'Book' | 'Textbook' | 'Stationery';
    quantity: number;
};

type Order = {
    userId: string;
    status: 'pending' | 'shipped' | 'delivered';
    total: number;
    products: Product[];
};

/**
 * Render the Edit component for Orders with strong types.
 *
 * @param {EditProps<Order>} props - The props for the Edit component.
 * @returns {React.ReactElement} The rendered Edit component.
 */
const OrdersEdit = (props: EditProps<Order>): React.ReactElement => {
    const order = useRecordContext<Order>();

    /**
     * Validate the form values.
     *
     * @param {Order} values - The form values.
     * @returns {Record<string, string>} The validation errors.
     */
    const validate = (values: Order): Record<string, string> => {
        const errors: Record<string, string> = {};

        if (!values.userId) {
            errors.userId = 'Required';
        }

        if (values.products.length === 0) {
            errors.products = 'Required';
        } else {
            values.products.forEach((product, index) => {
                if (!product.productId) {
                    errors[`products.${index}.productId`] = 'Required';
                }

                if (!product.productType) {
                    errors[`products.${index}.productType`] = 'Required';
                } else if (!['Book', 'Textbook', 'Stationery'].includes(product.productType)) {
                    errors[`products.${index}.productType`] = 'Invalid product type';
                }

                if (!product.quantity) {
                    errors[`products.${index}.quantity`] = 'Required';
                }
            });
        }

        if (!values.total) {
            errors.total = 'Required';
        }

        if (!values.status) {
            errors.status = 'Required';
        }

        return errors;
    };

    return (
        <Edit {...props} validate={validate}>
            <SimpleForm>
                <TextInput source="userId" label="User ID" />
                <SelectInput
                    source="status"
                    label="Status"
                    choices={[
                        { id: 'pending', name: 'Pending' },
                        { id: 'shipped', name: 'Shipped' },
                        { id: 'delivered', name: 'Delivered' },
                    ]}
                />
                <NumberInput source="total" label="Total Amount" />
                <ArrayInput source="products" label="Products">
                    <SimpleFormIterator>
                        <ReferenceInput
                            source="productId"
                            reference={(record: { productType: Product['productType'] }) =>
                                record.productType
                            }
                            perPage={0}
                            label="Product"
                        >
                            <SelectInput optionText="title" />
                        </ReferenceInput>
                        <SelectInput
                            source="productType"
                            label="Product Type"
                            choices={[
                                { id: 'Book', name: 'Book' },
                                { id: 'Textbook', name: 'Textbook' },
                                { id: 'Stationery', name: 'Stationery' },
                            ]}
                        />
                        <NumberInput source="quantity" label="Quantity" />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default OrdersEdit;
