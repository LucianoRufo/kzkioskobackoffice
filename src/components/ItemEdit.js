import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

export const ItemEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="bar_code" />
      <NumberInput source="price" />
    </SimpleForm>
  </Edit>
);
