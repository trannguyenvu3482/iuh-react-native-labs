import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { Edit } from "./app/Edit";
import Home from "./app/Home";
import Login from "./app/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
