import { List, Datagrid, TextField } from 'react-admin';

const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="email" label="Email" />
            <TextField source="role" label="Role" />
        </Datagrid>
    </List>
);

export default UserList;


