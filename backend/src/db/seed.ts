// import { db } from "./index.js";
// import { tools, categories } from "./schema.js";
// import slugify from "slugify";
// import { users } from "./schema.js";

// async function seed() {
//    await db
//       .insert(categories)
//       .values([
//          { name: "AI Tools", slug: "ai-tools" },
//          { name: "Developer Tools", slug: "developer-tools" },
//          { name: "SaaS", slug: "saas" },
//          { name: "Productivity", slug: "productivity" },
//          { name: "Automation", slug: "automation" },
//          { name: "Marketing", slug: "marketing" },
//          { name: "Design", slug: "design" },
//          { name: "Open Source", slug: "open-source" },
//          { name: "No Code", slug: "no-code" },
//          { name: "Analytics", slug: "analytics" },
//          { name: "Finance", slug: "finance" },
//          { name: "Education", slug: "education" },
//          { name: "Health", slug: "health" },
//          { name: "Browser Extension", slug: "browser-extension" },
//          { name: "Mobile", slug: "mobile" },
//          { name: "API", slug: "api" },
//       ])
//       .onConflictDoNothing();

//    console.log("Categories seeded successfully");
// }

// seed();
