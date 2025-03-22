import * as SQLite from 'expo-sqlite';

import { drizzle } from 'drizzle-orm/expo-sqlite';
import { eq } from 'drizzle-orm';

import { postsTable } from '@/src/db/schema/post';
import { usersTable } from '@/src/db/schema/users';

const expo = SQLite.openDatabaseSync('db.db');
const db = drizzle(expo);

export const getUsers = async () => {
  const users = await db.select().from(usersTable);
  const posts = await db.select().from(postsTable);
  console.log('users: ', users);
  console.log('post: ', posts);
};

export const deleteUsers = async () => {
  try {
    const users = await db
      .delete(usersTable)
      .where(eq(usersTable.name, 'Sebastian'));
    return { message: 'usuario eliminado', userData: users };
  } catch (error) {
    console.error('Error deleting users: ', error);
  }
};

export const createUser = async () => {
  const response = await db.insert(usersTable).values({
    name: 'Sebastian',
    age: 30,
    email: 'seeebas22@example.com',
  });

  console.log(response);
};
