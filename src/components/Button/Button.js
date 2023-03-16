import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import stylesFn from "./styles";

const Button = ({ onPress, text, disabled }) => {
  const styles = stylesFn({ disabled: disabled });
  return (
    <TouchableOpacity
      style={styles.btnBody}
      disabled={disabled}
      onPress={onPress}
    >
      <View>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { Button };
