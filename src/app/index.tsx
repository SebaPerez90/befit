import { View, Text, Pressable } from "react-native";
import React from "react";

export default function index() {
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
      <Pressable
        style={{
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 6,
          backgroundColor: "lightblue",
          marginTop: 10,
        }}
        onPress={() => alert("You touched the button!")}
      >
        <Text style={{ fontWeight: 400 }}>Press me!</Text>
      </Pressable>
    </View>
  );
}
