import { List, Datagrid, TextField } from 'react-admin';

const UserList = (props: any) => (
    <List {...props} title={'Списък с потребители'}>
        <Datagrid rowClick="edit">
            <TextField source="email" label="Имейл" />
            <TextField source="role" label="Роля" />
        </Datagrid>
    </List>
);

export default UserList;
