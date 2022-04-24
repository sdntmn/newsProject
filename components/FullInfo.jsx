import { Text, View, Button } from "react-native";
import { globalStyle } from "../styles/style";
import { useState } from "react";

export default function Contacts({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Статья</Text>
      <Text style={globalStyle.title}>{route.params.name}</Text>
      <Text style={globalStyle.title}>{route.params.full}</Text>
      {/* <Button title='Главная страница' onPress={loadScene} /> */}
    </View>
  );
}
