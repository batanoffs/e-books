import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin';

const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="email" label="Имейл" />
            <TextInput source="password" label="Парола" />
            <SelectInput
                source="role"
                label="Роля"
                choices={[
                    { id: 'user', name: 'User' },
                    { id: 'admin', name: 'Admin' },
                ]}
            />
        </SimpleForm>
    </Edit>
);

export default UserEdit;
