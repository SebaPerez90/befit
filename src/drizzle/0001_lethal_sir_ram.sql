CREATE TABLE `posts_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`body` text NOT NULL
);
--> statement-breakpoint
DROP INDEX `users_table_email_unique`;