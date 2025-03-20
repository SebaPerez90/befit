import database from "@/db";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const postsCollection = database.get("posts");
  console.log(postsCollection);

  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Hello world!</Text>
      <StatusBar style="light" />
    </View>
  );
}
