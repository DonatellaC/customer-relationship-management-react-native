import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    noCustomers: {
      fontSize: 18,
      marginTop: 10,
    },
  });
};

export default stylesFn;
