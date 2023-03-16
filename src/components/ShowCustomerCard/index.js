import { View, Text, TouchableOpacity } from "react-native";
import stylesFn from "./styles";

export default function ShowCustomerCard({
  firstName,
  lastName,
  region,
  onPress,
  customer,
}) {
  const styles = stylesFn();
  console.log(customer, "customer - showCustomerCard");

  return (
    <View style={styles.customerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.customerDetails}>First Name: {firstName}</Text>
        <Text style={styles.customerDetails}>Last Name: {lastName}</Text>
        <Text style={styles.customerDetails}>Region: {region}</Text>
      </TouchableOpacity>
    </View>
  );
}
