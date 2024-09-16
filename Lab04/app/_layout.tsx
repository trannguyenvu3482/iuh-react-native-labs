import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="screenTikiOK"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="screenPassword"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
