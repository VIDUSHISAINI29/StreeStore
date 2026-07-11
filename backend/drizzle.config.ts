/// <reference types="node" />
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
   schema: [
      "./src/db/schema/users.ts",
      "./src/db/schema/auth.ts",
      "./src/db/schema/project.ts",
      "./src/db/schema/endpoint.ts",
      "./src/db/schema/endpointCheck.ts",
      "./src/db/schema/incident.ts",
   ],
   out: "./drizzle",
   dialect: "postgresql",
   dbCredentials: {
      url: process.env.DATABASE_URL!,
   },
});