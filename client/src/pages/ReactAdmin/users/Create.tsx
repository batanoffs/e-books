import React from 'react';
import { Create, SimpleForm, TextInput, required, SelectInput } from 'react-admin';

const UserCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" validate={[required()]} />
            <TextInput source="password" validate={[required()]} />
            <SelectInput
                source="role"
                choices={[
                    { id: 'user', name: 'User' },
                    { id: 'admin', name: 'Admin' },
                ]}
            />
        </SimpleForm>
    </Create>
);

export default UserCreate;
