// import * as SQLite from 'expo-sqlite';
// import { drizzle } from 'drizzle-orm/expo-sqlite';
// import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
// import migrations from '@/src/drizzle/migrations';

import { useState } from 'react';

// const expo = SQLite.openDatabaseSync('db.db');
// const db = drizzle(expo);

export const useUsers = () => {
  //   const { success, error } = useMigrations(db, migrations);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  return { users, error, loading };
};

/**
 * 
 * const useUsers = (db) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await db.delete(usersTable);
        await db.insert(usersTable).values([
          { name: 'John', age: 30, email: 'john@example.com' },
        ]);
        const result = await db.select().from(usersTable);
        setUsers(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { users, loading, error };
};

 * 
 */
