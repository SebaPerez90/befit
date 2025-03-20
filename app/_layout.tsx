import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
