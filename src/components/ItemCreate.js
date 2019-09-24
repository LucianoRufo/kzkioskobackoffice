import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export const ItemCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Item Name" />
      <TextInput source="Bar code" />
      <DateInput source="Price" />
    </SimpleForm>
  </Create>
);
