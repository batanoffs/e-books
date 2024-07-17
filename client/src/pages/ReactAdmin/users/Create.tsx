import React from 'react';
import { Create, SimpleForm, TextInput, required, SelectInput } from 'react-admin';

const UserCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" label="Имейл" validate={[required()]} />
            <TextInput source="password" label="Парола" validate={[required()]} />
            <SelectInput
                source="role"
                label="Роля"
                choices={[
                    { id: 'user', name: 'Потребител' },
                    { id: 'admin', name: 'Администратор' },
                ]}
            />
        </SimpleForm>
    </Create>
);

export default UserCreate;

