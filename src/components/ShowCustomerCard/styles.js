import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    customerContainer: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginBottom: 10,
    },
    customerDetails: {
      fontSize: 18,
      marginBottom: 5,
    },
    noCustomers: {
      fontSize: 18,
      marginTop: 10,
    },
  });

export default stylesFn;
