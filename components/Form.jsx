import { StyleSheet, TextInput, View, Button, Dimensions } from "react-native";
import { Formik } from "formik";
import { globalStyle } from "../styles/style";
import { Children } from "react";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{
          title: "",
          anons: "",
          full: "",
          img: "",
        }}
        onSubmit={(values, clear) => {
          addArticle(values);
          clear.resetForm();
        }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.title}
              placeholder='Заголовок статьи'
              onChangeText={props.handleChange("title")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              placeholder='Краткое описание статьи'
              onChangeText={props.handleChange("anons")}
              multiline
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              placeholder='Текст статьи'
              onChangeText={props.handleChange("full")}
              multiline
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder='Ссылка на картинку для статьи'
              onChangeText={props.handleChange("img")}
            />
            <View style={styles.inputBtn}>
              <Button title='Добавить' onPress={props.handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderColor: "silver",
    borderRadius: 5,
  },

  inputBtn: {
    marginTop: 15,
    width: "50%",
    justifyContent: "center",
    marginLeft: screenWidth / 4,
  },
});
