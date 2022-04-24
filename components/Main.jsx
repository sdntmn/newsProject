import { Text, View } from "react-native";
import { globalStyle } from "../styles/style";
import { useState } from "react";

export default function Main() {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Главная страница</Text>
    </View>
  );
}
