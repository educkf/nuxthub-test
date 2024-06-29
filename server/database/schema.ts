import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const messages = sqliteTable('messages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull().default('titulo'),
  text: text('text').notNull(),
  created_at: integer('created_at', { mode: 'timestamp' }).notNull(),
})
