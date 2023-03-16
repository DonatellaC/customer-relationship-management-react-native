import { View, Text } from "react-native";
import stylesFn from "./styles";
import regionsData from "../../utilities/regions";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useLoadCustomers } from "../../features/hooks";

const RegionsList = () => {
  const styles = stylesFn();
  const navigation = useNavigation();
  const customers = useLoadCustomers();

  const handleRegionSelect = (region) => {
    const filteredCustomers = customers.filter(
      (customer) => customer.region === region
    );
    navigation.navigate("Customers By Region", { region, filteredCustomers });
  };

  return (
    <View style={styles.container}>
      <Text>Please select a region</Text>
      {regionsData.map((region, index) => {
        const customerCount = customers.filter(
          (customer) => customer.region === region
        ).length;
        return (
          <Button
            key={index}
            onPress={() => handleRegionSelect(region)}
            text={`${region} (${customerCount})`}
          />
        );
      })}
    </View>
  );
};

export default RegionsList;
