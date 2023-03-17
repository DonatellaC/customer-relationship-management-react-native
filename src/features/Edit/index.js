import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../hooks";
import Form from "../../components/Form/Form";

const Edit = () => {
  const { customerID } = useRoute().params;
  const { onSubmit } = useEditCustomer(customerID);
  return (
    <View>
      <Form handleSubmit={onSubmit} customerID={customerID} />
    </View>
  );
};

export default Edit;
