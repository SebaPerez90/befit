import { View, Text, Pressable } from "react-native";
import React from "react";
import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
// import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
// import migrations from "../drizzle/migrations";
import { eq } from "drizzle-orm";
import { postsTable } from "../db/schema/post";
import { usersTable } from "../db/schema/users";

const expo = SQLite.openDatabaseSync("db.db");
const db = drizzle(expo);

export default function index() {
  // const { success, error } = useMigrations(db, migrations);

  const getUsers = async () => {
    const users = await db.select().from(usersTable);
    const posts = await db.select().from(postsTable);
    console.log("users: ", users);
    console.log("post: ", posts);
  };

  const deleteUsers = async () => {
    try {
      const users = await db
        .delete(usersTable)
        .where(eq(usersTable.name, "Sebastian"));
      return { message: "usuario eliminado", userData: users };
    } catch (error) {
      console.error("Error deleting users: ", error);
    }
  };

  const createUser = async () => {
    return db.insert(usersTable).values({
      name: "Sebastian",
      age: 30,
      email: "john@example.com",
    });
  };

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-2xl text-white">Hello world!</Text>
      <Pressable
        className="rounded-lg bg-blue-500 py-3 px-5 mt-8"
        onPress={getUsers}
      >
        <Text className="text-white">View users</Text>
      </Pressable>
      <Pressable
        className="rounded-lg bg-red-500 py-3 px-5 mt-8"
        onPress={deleteUsers}
      >
        <Text className="text-white">Delete users</Text>
      </Pressable>
      <Pressable
        className="rounded-lg bg-green-500 py-3 px-5 mt-8"
        onPress={createUser}
      >
        <Text className="text-white">Create users</Text>
      </Pressable>
    </View>
  );
}
