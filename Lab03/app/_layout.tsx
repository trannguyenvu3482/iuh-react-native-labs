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
        name="screen1a"
        options={{
          title: "Screen 1A",
        }}
      />
      <Stack.Screen
        name="screen1b"
        options={{
          title: "Screen 1B",
        }}
      />
      <Stack.Screen
        name="screen1c"
        options={{
          title: "Screen 1C",
        }}
      />
      <Stack.Screen
        name="screen1d"
        options={{
          title: "Screen 1D",
        }}
      />
    </Stack>
  );
}
