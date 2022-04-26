import { StyleSheet, Image, Text, View } from "react-native";
import { globalStyle } from "../styles/style";

export default function Contacts({ navigation, route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={globalStyle.main}>
      <Text style={[globalStyle.title, styles.textTitleArticle]}>
        {route.params.title}
      </Text>
      <Image
        style={styles.imageArticle}
        source={{
          uri: route.params.img,
        }}
      />

      <Text style={[globalStyle.title, styles.textArticle]}>
        {route.params.full}
      </Text>
      {/* <Button title='Главная страница' onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textTitleArticle: {
    marginBottom: 30,
  },
  textArticle: {
    marginTop: 30,
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
  },
  imageArticle: {
    width: "100%",
    height: 200,
  },
});
