import Main from "./components/Main";
import FullInfo from "./components/FullInfo";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            title: "Главная",
            headerStyle: { backgroundColor: "#eb5d3d", height: 100 },
            headerTitleStyle: { fontWeight: "600" },
          }}
        />
        <Stack.Screen
          name='FullInfo'
          component={FullInfo}
          options={{
            title: "Статья",
            headerStyle: { backgroundColor: "#eb5d3d", height: 100 },
            headerTitleStyle: { fontWeight: "500" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
