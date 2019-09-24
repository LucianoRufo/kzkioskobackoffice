import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const ItemList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="bar_code" />
            <TextField source="name" />
            <NumberField source="price" />
        </Datagrid>
    </List>
);
