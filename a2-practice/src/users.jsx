import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="full_names" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);