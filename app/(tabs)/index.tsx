import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 100 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Catch the hacker !</Text>
      <TouchableOpacity onPress={() => router.push("/(tabs)/spinWheel")} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8 }}>
        <Text style={{ fontSize: 20 }}>Start Game ▶</Text>
      </TouchableOpacity>
    </View>
  );
}