import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

export const PurchaseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Item Name" />
            <TextInput source="Bar code" />
            <DateInput source="Price" />
        </SimpleForm>
    </Create>
);