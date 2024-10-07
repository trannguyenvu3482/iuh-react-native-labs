import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import Home from "./app/Home";
import Login from "./app/Login";
import { TaskProvider } from "./context/taskContext";
import { UserProvider } from "./context/userContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <TaskProvider>
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
            </Stack.Navigator>
          </PaperProvider>
        </TaskProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
