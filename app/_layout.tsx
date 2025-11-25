import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/index" options={{ headerTitle: "Catch the hacker" }} />
      <Stack.Screen name="(tabs)/spinWheel" options={{ headerTitle: "Spin the Wheel" }} />
    </Stack>
  );
}