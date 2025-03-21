import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable("posts_table", {
  id: int().primaryKey({ autoIncrement: true }),
  body: text().notNull(),
});
