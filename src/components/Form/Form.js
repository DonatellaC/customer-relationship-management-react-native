import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useUpdateFields } from "../../features/hooks.js";
import { Button } from "../../components/Button/Button";
import regions from "../../utilities/regions";
import formStyles from "./styles";

const Form = ({ handleSubmit, customerID }) => {
  const styles = StyleSheet.create(formStyles());
  const { fields, setFormField } = useUpdateFields(customerID);

  const { firstName, lastName, region, contact } = fields;

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <View style={styles.container}>
      <TextInput
        key={"firstName"}
        placeholder="First Name"
        value={firstName}
        style={styles.textInput}
        onChangeText={setFormField("firstName")}
      />

      <View style={{ height: 15, width: "100%" }}></View>

      <TextInput
        key={"lastName"}
        placeholder="Last Name"
        value={lastName}
        style={styles.textInput}
        onChangeText={setFormField("lastName")}
      />

      <View style={{ height: 15, width: "100%" }}></View>

      <Picker
        selectedValue={region}
        onValueChange={(itemValue) => setFormField("region")(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a region" value="" />
        {regions.map((region) => (
          <Picker.Item key={region} label={region} value={region} />
        ))}
      </Picker>

      <View style={{ height: 15, width: "100%" }}></View>

      <TextInput
        key={"contact"}
        placeholder="Contact"
        value={contact}
        style={styles.textInput}
        onChangeText={setFormField("contact")}
      />

      <Button onPress={onSubmit} text="Submit" />
    </View>
  );
};

export default Form;
