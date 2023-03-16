import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      padding: 10,
      borderRadius: 4,
      marginTop: 10,
      width: width / 1.3,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      width: width / 1.3,
    },
  });
};

export default stylesFn;
