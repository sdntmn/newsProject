import { Button, Text, View, TouchableOpacity, FlatList } from "react-native";
import { globalStyle } from "../styles/style";
import { useState } from "react";

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate("FullInfo");
  };

  const [news, setNews] = useState([
    {
      name: "Наименование Статья-1",
      anons: "Краткое описание-1",
      full: "Теперь вы готовы создать и запустить приложение на устройстве/симуляторе.",
    },
    {
      name: "Наименование Статья-2",
      anons: "Краткое описание-2",
      full: "Теперь вы можете создать приложение с домашним экраном и экраном профиля:",
    },
    {
      name: "Наименование Статья-3",
      anons: "Краткое описание-3",
      full: "В этом примере есть 2 экрана (Home и Profile), определенные с помощью Stack.Screenкомпонента. Точно так же вы можете определить столько экранов, сколько захотите.",
    },
  ]);
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}>
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />

      <Button title='Страница контактов' onPress={loadScene} />
    </View>
  );
}
