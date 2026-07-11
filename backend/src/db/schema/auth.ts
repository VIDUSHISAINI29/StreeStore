import { relations } from "drizzle-orm";
import {
   pgTable,
   text,
   timestamp,
   boolean,
   index,
   uuid,
} from "drizzle-orm/pg-core";

// Better Auth core tables.
//
// Table naming:
//   'auth'         — Better Auth identity table (avoids PostgreSQL reserved word 'user')
//   'session'      — active login sessions
//   'account'      — OAuth provider connections per user
//   'verification' — temporary tokens (email verify, password reset, magic link)
//
// These are separate from the app's public.users table which holds
// product-level data (bio, social handles, tools).
// They share the same id — public.users.id references auth.id.

export const auth = pgTable("auth", {
   id: uuid("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
   name: text("name").notNull(),
   email: text("email").notNull().unique(),
   emailVerified: boolean("email_verified").default(false).notNull(),
   image: text("image"), // avatar URL from OAuth provider
   createdAt: timestamp("created_at").defaultNow().notNull(),
   updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
});

export const session = pgTable(
   "session",
   {
      id: uuid('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
      expiresAt: timestamp("expires_at").notNull(),
      token: text("token").notNull().unique(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at")
         .$onUpdate(() => new Date())
         .notNull(),
      ipAddress: text("ip_address"),
      userAgent: text("user_agent"),
      userId: uuid("user_id")
         .notNull()
         .references(() => auth.id, { onDelete: "cascade" }),
   },
   (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
   "account",
   {
      id: uuid('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
      accountId: text("account_id").notNull(),
      providerId: text("provider_id").notNull(),
      userId: uuid("user_id")
         .notNull()
         .references(() => auth.id, { onDelete: "cascade" }),
      accessToken: text("access_token"),
      refreshToken: text("refresh_token"),
      idToken: text("id_token"),
      accessTokenExpiresAt: timestamp("access_token_expires_at"),
      refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
      scope: text("scope"),
      password: text("password"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at")
         .$onUpdate(() => new Date())
         .notNull(),
   },
   (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
   'verification',
   {
      id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()), 
      identifier: text('identifier').notNull(),
      value: text('value').notNull(),
      expiresAt: timestamp('expires_at').notNull(),
      createdAt: timestamp('created_at').defaultNow().notNull(),
      updatedAt: timestamp('updated_at')
         .defaultNow()
         .$onUpdate(() => new Date())
         .notNull(),
   },
   (table) => [index('verification_identifier_idx').on(table.identifier)],
)

export const userRelations = relations(auth, ({ many }) => ({
   sessions: many(session),
   accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
   user: one(auth, {
      fields: [session.userId],
      references: [auth.id],
   }),
}));

export const accountRelations = relations(account, ({ one }) => ({
   user: one(auth, {
      fields: [account.userId],
      references: [auth.id],
   }),
}));
