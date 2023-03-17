import { Provider } from "react-redux";
import initializeStore from "./src/store";
import Navigation from "./src/navigation/index";
import Toast from "react-native-toast-message";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import {
  askNotification,
  handleNotification,
} from "./src/utilities/notification";

const store = initializeStore();

export default function App() {
  useEffect(() => {
    askNotification();

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  );
}
