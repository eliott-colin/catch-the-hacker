import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Anton: require("../assets/fonts/Anton/Anton-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <></>; 
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)/index" options={{ headerTitle: "Catch the hack" }} />
      <Stack.Screen name="(tabs)/spinWheel" options={{ headerTitle: "Spin the Wheel" }} />
      <Stack.Screen name="(tabs)/gameRules" options={{ headerTitle: "Game Rules" }} />
    </Stack>
  );
}