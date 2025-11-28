import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 100 }}>      
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Catch the Hack !</Text>
      <Image 
        source={require("../../assets/images/test-card.png")}
        style={{ width: 200, height: 300, marginBottom: 30, borderRadius: 8,}}
        />

      <TouchableOpacity onPress={() => router.push("/(tabs)/spinWheel")} style={{ padding: 20, backgroundColor: "#451a5eff", borderRadius: 8 }}>
        <Text style={{ fontSize: 20, color: "white"}}>What's my power ?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/(tabs)/gameRules")} style={{ padding: 20, backgroundColor: "#451a5eff", borderRadius: 8, marginTop: 20 }}>
        <Text style={{ fontSize: 20, color: "white"}}>Game Rules</Text>
      </TouchableOpacity>
    </View>
  );
}