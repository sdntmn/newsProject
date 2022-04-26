import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { globalStyle } from "./styles/style";
import * as Font from "expo-font";
import { useState } from "react";
import MainStack from "./navigate";

export default function App() {
  const [font, setFont] = useState(false);

  async function fonts() {
    await Font.loadAsync({
      "mt-bolt": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
    });
  }

  if (font) {
    return <MainStack />;
  }
  return (
    <AppLoading
      startAsync={fonts}
      onFinish={() => setFont(true)}
      onError={console.warn}
    />
  );
}
