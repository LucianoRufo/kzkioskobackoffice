import React from "react";
import { Create, SimpleForm, TextInput, DateInput , ReferenceInput, SelectInput} from "react-admin";

export const PurchaseCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Username" />
      <DateInput source="Purchase date" />
      <ReferenceInput label="Item" source="item_id" reference="items">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
