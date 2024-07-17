import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const UserShow: React.FC = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="email" />
            <TextField source="role" />
        </SimpleShowLayout>
    </Show>
);

export default UserShow;

