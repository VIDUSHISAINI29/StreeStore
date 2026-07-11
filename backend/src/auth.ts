import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index.js";
import {
   auth as authTable,
   session,
   account,
   verification,
} from "./db/schema/auth.js";
import { users } from "./db/schema/users.js";
import { getUserCount } from "./modules/user/user.service.js";

export const auth = betterAuth({
   database: drizzleAdapter(db, {
      provider: "pg",
      schema: {
         user: authTable,
         session,
         account,
         verification,
      },
   }),

   advanced: {
      database: {
         generateId: "uuid",
      },
   },

   basePath: "/api/auth",

   socialProviders: {
      google: {
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      },
      github: {
         clientId: process.env.GITHUB_CLIENT_ID as string,
         clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      },
   },

      emailAndPassword: {    
        enabled: true
    },


   trustedOrigins: process.env.FRONTEND_URL
      ? process.env.FRONTEND_URL.split(",")
      : [],

   databaseHooks: {
      user: {
         create: {
            after: async (user) => {
               // Count existing users before insert to determine founding member status
               // First 50 users get the founding member badge permanently
               const count = await getUserCount();
               const isFoundingMember = count < 50;

               await db
                  .insert(users)
                  .values({
                     id: user.id,
                     email: user.email,
                     name: user.name,
                     avatar: user.image ?? null,
                  })
                  .onConflictDoNothing();
            },
         },
      },
   },
});

export type Session = typeof auth.$Infer.Session;
