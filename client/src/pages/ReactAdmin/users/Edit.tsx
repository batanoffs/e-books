import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin';

const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="password" />
            <SelectInput
                source="role"
                choices={[
                    { id: 'user', name: 'User' },
                    { id: 'admin', name: 'Admin' },
                ]}
            />
        </SimpleForm>
    </Edit>
);

export default UserEdit;
