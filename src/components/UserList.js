import React from 'react';
import { List, Datagrid, TextField, DateInput, Filter, ReferenceInput, SelectInput, TextInput} from 'react-admin';

export const UserList = props => (
    <List {...props} >
        <Datagrid rowClick="show">
            <TextField source="name" />
        </Datagrid>
    </List>
);