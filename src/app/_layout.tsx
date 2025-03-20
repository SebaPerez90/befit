import "react-native-reanimated";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";
import { usersTable } from "@/src/db/schema";
import "../styles/global.css";

const expo = SQLite.openDatabaseSync("db.db");
const db = drizzle(expo);
export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  const [items, setItems] = useState<(typeof usersTable.$inferSelect)[] | null>(
    null
  );

  useEffect(() => {
    if (!success) return;
    (async () => {
      await db.delete(usersTable);
      await db.insert(usersTable).values([
        {
          name: "John",
          age: 30,
          email: "john@example.com",
        },
        {
          name: "Sebastian",
          age: 30,
          email: "sebastian@example.com",
        },
        {
          name: "Sebastian",
          age: 30,
          email: "pepeaguilar@example.com",
        },
      ]);
      const users = await db.select().from(usersTable);
      setItems(users);
    })();
  }, [success]);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Text className="text-blue-500 text-5xl">nombres</Text>
      {items?.map((item) => (
        <Text key={item.id}>{item.email}</Text>
      ))}
      {/* <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack> */}
      <StatusBar style="light" />
    </View>
  );
}
