import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Screen1a from "./app/Screen1a";
import Screen1b from "./app/Screen1b";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1a"
          component={Screen1a}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen1b"
          component={Screen1b}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
