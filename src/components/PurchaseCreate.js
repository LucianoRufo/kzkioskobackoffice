import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

export const PurchaseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Username" />
            <TextInput source="Item name" />
            <DateInput source="Purchase date" />
        </SimpleForm>
    </Create>
);