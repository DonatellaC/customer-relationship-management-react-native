import { Keyboard } from "react-native";
// import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

export const onNotificationSubmit = () => {
  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: "Notification of the day",
      body: "Open the app to check your customers",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue",
    },
    trigger: {
      seconds: 5,
    },
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(schedulingOptions);
};

export const handleNotification = () => {
  console.warn("Check your customers");
};

export const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync();
  if (Device.isDevice && status === "granted")
    console.log("Notification permissions granted.");
};
