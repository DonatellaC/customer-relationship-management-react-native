import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      backgrounColor: "#ddd",
      paddingTop: 14,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      width: "100%",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 4,
      padding: 15,
      width: width / 1.3,
      backgroundColor: "#fff",
      fontSize: 16,
    },
    picker: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 4,
      padding: 15,
      width: width / 1.3,
      backgroundColor: "#fff",
      fontSize: 16,
    },
  });
};

export default stylesFn;
