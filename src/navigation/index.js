import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/Welcome";
import NewCustomer from "../screens/NewCustomer";
import EditScreen from "../screens/EditScreen";
import ListByRegion from "../screens/ListByRegion";
import Regions from "../screens/Regions";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Create" component={NewCustomer} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Customers By Region" component={ListByRegion} />
        <Stack.Screen name="Regions" component={Regions} title="Regions" />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
