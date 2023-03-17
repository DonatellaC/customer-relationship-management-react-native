import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesFn from "./styles";

export default function ShowCustomerCard({
  firstName,
  lastName,
  region,
  customer,
}) {
  const styles = stylesFn();
  const { navigate } = useNavigation();

  return (
    <View style={styles.customerContainer}>
      <TouchableOpacity
        onPress={() => navigate("Edit", { customerID: customer.id })}
      >
        <Text style={styles.customerDetails}>First Name: {firstName}</Text>
        <Text style={styles.customerDetails}>Last Name: {lastName}</Text>
        <Text style={styles.customerDetails}>Region: {region}</Text>
      </TouchableOpacity>
    </View>
  );
}
