import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const UserShow: React.FC = (props) => (
    <Show {...props} >
        <SimpleShowLayout>
            <TextField label="Имейл" source="email" />
            <TextField label="Роля" source="role" />
        </SimpleShowLayout>
    </Show>
);

export default UserShow;

