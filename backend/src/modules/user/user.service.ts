import { db } from "../../db/index.js";
import { users } from "../../db/schema/index.js";
import { eq, sql } from "drizzle-orm";

export interface UpdateUserPayload {
   name?: string;
   avatar?: string;
}

export const updateUser = async (userId: string, data: UpdateUserPayload) => {
   const result = await db
      .update(users)
      .set({
         name: data.name,
         avatar: data.avatar,
      })
      .where(eq(users.id, userId))
      .returning();

   return result[0];
};

export const getUserById = async (userId: string) => {
   const result = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

   return result[0] ?? null;
};

/*
COUNT USERS
Used by auth hook to determine founding member status —
first 50 users get the founding member badge automatically.
*/
export const getUserCount = async (): Promise<number> => {
   const result = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(users);

   return result[0].count;
};
