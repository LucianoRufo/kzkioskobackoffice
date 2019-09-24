import React from 'react';
import { TextInput, DateInput, SimpleForm, Edit, ReferenceInput,NumberInput,SelectInput  } from 'react-admin';

export const PurchaseEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="date" />
            <ReferenceInput source="item_id" reference="items"><SelectInput optionText="id" /></ReferenceInput>
            <NumberInput source="price" />
            <ReferenceInput source="user_id" reference="users"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);