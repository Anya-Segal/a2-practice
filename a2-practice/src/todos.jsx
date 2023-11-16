import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField,
    BooleanInput, DateInput, Edit, SimpleForm, TextInput, Create, Show, SimpleShowLayout } from 'react-admin';

export const TodoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="description" />
            <ReferenceField source="full_names" reference="users" />
            <BooleanField source="done" />
            <DateField source="due_date" />
            <DateField source="created" />
        </Datagrid>
    </List>
);


export const TodoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="description" />
            <ReferenceField source="full_names" reference="users" />
            <BooleanInput source="done" />
            <DateInput source="due_date" />
            <DateField source="created" />
        </SimpleForm>
    </Edit>
);


export const TodoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="description" />
            <ReferenceField source="full_names" reference="users" />
            <BooleanInput source="done" />
            <DateInput source="due_date" />
            <DateField source="created" />
        </SimpleForm>
    </Create>
);


export const TodoShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="description" />
            <ReferenceField source="full_names" reference="users" />
            <BooleanField source="done" />
            <DateField source="due_date" />
            <DateField source="created" />
        </SimpleShowLayout>
    </Show>
);