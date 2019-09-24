import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField } from 'react-admin';

export const PurchaseList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <DateField source="date" />
      <ReferenceField source="item_id" reference="items">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="cost" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
