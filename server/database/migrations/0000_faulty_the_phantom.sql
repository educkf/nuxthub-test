CREATE TABLE `messages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text DEFAULT 'titulo' NOT NULL,
	`text` text NOT NULL,
	`created_at` integer NOT NULL
);
