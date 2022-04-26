import * as Analytics from "expo-firebase-analytics";
import React, { useRef } from "react";
import Main from "./components/Main";
import FullInfo from "./components/FullInfo";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Navigate() {
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await Analytics.setCurrentScreen(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}>
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
