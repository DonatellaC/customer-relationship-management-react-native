import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useUpdateFields, useEditCustomer } from "../hooks";
import Form from "../../components/Form/Form";

export default function Edit() {
  const { customer } = useRoute().params;
  const { fields, setFormField } = useUpdateFields();
  const { onSubmit } = useEditCustomer(customer?.id);

  useEffect(() => {
    console.log("customer in useEffect", customer);

    setFormField("firstName", customer.firstName);
    setFormField("lastName", customer.lastName);
    setFormField("region", customer.region);
    setFormField("contact", customer.contact);
  }, [customer, setFormField]);

  console.log("fields- Edit", fields);
  console.log("customer", customer);
  console.log(customer.firstName, "***Edit component, customer.firstName");

  return (
    <View>
      <Form
        firstName={fields.firstName}
        lastName={fields.lastName}
        region={fields.region}
        contact={fields.contact}
        setFormField={setFormField}
        handleSubmit={onSubmit}
      />
    </View>
  );
}
