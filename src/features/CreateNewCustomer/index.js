import { View } from "react-native";
import { useNewCustomer } from "../hooks";
import Form from "../../components/Form/Form";

const CreateNewCustomer = () => {
  const { onSubmit } = useNewCustomer();
  return (
    <View>
      <Form handleSubmit={onSubmit} />
    </View>
  );
};

export default CreateNewCustomer;
