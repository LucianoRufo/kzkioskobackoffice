import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

export const PurchaseEdit = props => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="price" step={1} />
      <DateInput
        label="Purchase Date"
        source="date"
        defaultValue={new Date()}
      />
      <ReferenceInput label="Item" source="item_id" reference="items">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
