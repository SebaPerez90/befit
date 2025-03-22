import { View, Text } from 'react-native';
import React from 'react';

import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { openDatabaseSync } from 'expo-sqlite';
import migrations from '../drizzle/migrations';

const expoDb = openDatabaseSync('db.db');
const db = drizzle(expoDb);

const Home = () => {
  const { success, error } = useMigrations(db, migrations);
  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

export default Home;
