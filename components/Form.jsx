import React, { useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

export default function Form({ addArticle }) {
  const inputRef = useRef();
  const pressedClear = () => {
    inputRef.current.clear();
  };
  return (
    <View style={styles.container}>
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
            <View style={styles.inputBase}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                value={props.values.title}
                placeholder='Заголовок статьи'
                onChangeText={props.handleChange("title")}
              />
              <TouchableOpacity style={styles.item} onPress={pressedClear}>
                <Text style={styles.clear}>Очистить</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputBase}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                value={props.values.anons}
                placeholder='Краткое описание статьи'
                onChangeText={props.handleChange("anons")}
                multiline={true}
              />
              <TouchableOpacity style={styles.item} onPress={pressedClear}>
                <Text style={styles.clear}>Очистить</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputBase}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                value={props.values.full}
                placeholder='Текст статьи'
                onChangeText={props.handleChange("full")}
                multiline={true}
              />
              <TouchableOpacity style={styles.item} onPress={pressedClear}>
                <Text style={styles.clear}>Очистить</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputBase}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                value={props.values.img}
                placeholder='Ссылка на картинку для статьи'
                onChangeText={props.handleChange("img")}
              />
              <TouchableOpacity style={styles.item} onPress={pressedClear}>
                <Text style={styles.clear}>Очистить</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputBtn}>
              <Button title='Добавить' onPress={props.handleSubmit} />
            </View>
            <View style={styles.inputBtn}>
              <Button title='Очистить' onPress={pressedClear} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
// const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  inputBase: {
    alignSelf: "auto",
  },
  input: {
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
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
  item: {
    marginTop: 5,
    marginRight: 5,
    alignItems: "flex-end",
  },
  clear: {
    opacity: 0.6,
  },
});
