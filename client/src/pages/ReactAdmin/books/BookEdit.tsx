import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, useRecordContext } from 'react-admin';

const BookEdit: React.FC = (props) => {
    const record = useRecordContext();

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="author" />
                <NumberInput source="price" />
                <TextInput source="description" multiline />
                <TextInput source="imageUrl" />
                <NumberInput source="stock" />
                <SelectInput source="category" choices={[
                    { id: 'Self-Help', name: 'Self-Help' },
                    { id: 'Business', name: 'Business' },
                    { id: 'Fiction', name: 'Fiction' },
                    { id: 'Spirituality', name: 'Spirituality' },
                    { id: 'Poetry', name: 'Poetry' }
                ]} />
            </SimpleForm>
        </Edit>
    );
};

export default BookEdit;
