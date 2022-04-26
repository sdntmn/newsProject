import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { globalStyle } from "../styles/style";
import { useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  // const loadScene = () => {
  //   navigation.navigate("FullInfo");
  // };

  const [news, setNews] = useState([
    {
      title: "Про снег",
      anons: "Краткое описание Про снег",
      full: "Теперь вы готовы создать и запустить приложение на устройстве/симуляторе.",
      key: "1",
      img: "http://placeimg.com/640/480/arch/sepia",
    },
    {
      title: "Наименование Статья-2",
      anons: "Краткое описание-2",
      full: "Теперь вы можете создать приложение с домашним экраном и экраном профиля:",
      key: "2",
      img: "http://placeimg.com/640/480/tech/grayscale",
    },
    {
      title: "Наименование Статья-3",
      anons: "Краткое описание-3",
      full: "В этом примере есть 2 экрана (Home и Profile), определенные с помощью Stack.Screenкомпонента. Точно так же вы можете определить столько экранов, сколько захотите.",
      key: "3",
      img: "http://placeimg.com/640/480/nature/grayscale",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalVisible(false);
  };

  return (
    <View style={globalStyle.main}>
      <Modal animationType='fade' visible={modalVisible}>
        <View style={{ flex: 1 }}>
          <MaterialCommunityIcons
            style={styles.modalClose}
            name='window-close'
            size={24}
            color='black'
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.centeredView}>
            <Text style={styles.title}>Форма добавления статьи</Text>
            <Form addArticle={addArticle} />
          </View>
        </View>
      </Modal>
      <MaterialIcons
        name='post-add'
        size={48}
        color='grey'
        onPress={() => setModalVisible(true)}
      />
      <Text style={[globalStyle.title, styles.header]}>Статьи</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <Button title='Страница контактов' onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  modalClose: {
    justifyContent: "center",
    alignItems: "flex-end",

    marginTop: 22,
  },
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bolt",
    fontSize: 22,
    marginTop: 20,
    textAlign: "center",
  },

  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 200,
  },
  modal: {
    width: "80%",
  },
});
