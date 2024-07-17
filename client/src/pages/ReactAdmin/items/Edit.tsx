import { Edit, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin';

const ItemsEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <NumberInput source="price" />
                <TextInput source="description" multiline />
                <TextInput source="imageUrl" />
                <NumberInput source="stock" />
                <SelectInput source="category" choices={[]} />
            </SimpleForm>
        </Edit>
    );
};

export default ItemsEdit;
