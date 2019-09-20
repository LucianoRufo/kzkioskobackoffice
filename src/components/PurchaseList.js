import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const PurchaseList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="date" />
            <ReferenceField source="item_id" reference="items"><TextField source="id" /></ReferenceField>
            <TextField source="price" />
            <ReferenceField source="user_id" reference="users"><TextField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);