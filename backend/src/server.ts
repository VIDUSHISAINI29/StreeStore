import "dotenv/config";
import * as Sentry from "@sentry/node";

Sentry.init({
   dsn: process.env.SENTRY_DSN,
   environment: process.env.NODE_ENV || "development",
   tracesSampleRate: 0.2,
   sendDefaultPii: false,
});

import app from "./app.js";

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
   console.log(`Server running on port http://localhost:${PORT}`);
});

process.on("SIGTERM", () => {
   console.log("SIGTERM received. Shutting down...");
   process.exit(0);
});

process.on("unhandledRejection", (err) => {
   console.error("Unhandled Rejection:", err);
});

process.on("uncaughtException", (err) => {
   console.error("Uncaught Exception:", err);
});
