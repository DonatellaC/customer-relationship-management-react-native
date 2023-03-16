import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button } from "../components/Button/Button";
import { useDispatch } from "react-redux";
import * as actions from "../features/reducers";

export default function Welcome() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleDeleteCustomer = () => {
    dispatch(actions.deleteCustomers());
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigate("Create")}
        text="Create New Customer"
      ></Button>
      <Button onPress={() => navigate("Regions")} text="Go to Regions"></Button>
      <Button onPress={handleDeleteCustomer} text="Delete Database"></Button>
    </View>
  );
}
