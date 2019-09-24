import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="account" />
    </SimpleForm>
  </Edit>
);
