import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './app/Home.jsx'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
