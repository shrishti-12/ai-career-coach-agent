// import { integer, jsonb, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

// // Users table
// export const usersTable = pgTable("users", {
//   id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar("name", { length: 255 }).notNull(),
//   email: varchar("email", { length: 255 }).notNull().unique(),
// });

// // History table
// export const historyTable = pgTable("history", {
//   id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
//   recordId: varchar("record_id", { length: 255 }).notNull(),
//   content: jsonb("content").notNull(),
//   userEmail: varchar("user_email", { length: 255 })
//     .notNull()
//     .references(() => usersTable.email),
//   createdAt: timestamp("created_at").defaultNow().notNull(),
//   aiAgentType: varchar("ai_agent_type", { length: 255 }).notNull(),
//   metaData: varchar("metadata", { length: 255 }),
// });


import { metadata } from "@/app/layout";
import { timestamp } from "drizzle-orm/mysql-core";
import { integer, jsonb, pgTable, varchar,json } from "drizzle-orm/pg-core";


export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),

});

export const HistoryTable = pgTable('historyTable',{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    recordId: varchar().notNull(),
    content: jsonb(),
    userEmail: varchar('userEmail').references(()=> usersTable.email),
    createdAt: varchar(),
    aiAgentType: varchar(),
    metaData: varchar(),
})
// // export const HistoryTable = pgTable('historyTable', {
//    id: integer().primaryKey().generatedAlwaysAsIdentity(),
//    recordId: varchar({ length: 255 }).notNull(),
//    content: json().notNull(),
//    userEmail: varchar("userEmail", { length: 255 }).references(
//     () => usersTable.email
//   ),
//    createdAt: timestamp({ mode: "string" }).defaultNow(),
//    aiAgentType: varchar({ length: 255 }),
//    metaData: json()
// });
