import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { toNodeHandler } from "better-auth/node";
import * as Sentry from "@sentry/node";
import './lib/redis.js';

import { auth } from "./auth.js";
import userRoutes from './modules/user/user.routes.js';

const app = express();

app.use(helmet());
app.use(compression());

// Use combined format in production for structured log ingestion (Dozzle),
// dev format locally for readable console output
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

const allowedOrigins = process.env.FRONTEND_URL
   ? process.env.FRONTEND_URL.split(",")
   : [];

app.use(
   cors({
      origin: allowedOrigins,
      credentials: true,
   }),
);

/*
   Better Auth handler MUST be mounted before express.json().
   It reads the raw request body itself — if express.json() runs first,
   the body stream is already consumed and auth requests will fail.
*/
app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());

/* ===============================
   Rate Limiters
=============================== */

// Boost: 10 per 15 min per IP — prevents spam boosting scripts
const boostLimiter = rateLimit({
   windowMs: 15 * 60 * 1000,
   max: 10,
   message: { message: "Too many boost attempts. Please try again later." },
   standardHeaders: true,
   legacyHeaders: false,
});

// Upload: 20 per hour per IP — prevents R2 storage abuse
const uploadLimiter = rateLimit({
   windowMs: 60 * 60 * 1000,
   max: 20,
   message: { message: "Too many uploads. Please try again later." },
   standardHeaders: true,
   legacyHeaders: false,
});

// Tool creation: 10 per hour per IP — prevents listing spam
const createToolLimiter = rateLimit({
   windowMs: 60 * 60 * 1000,
   max: 10,
   message: { message: "Too many tool submissions. Please try again later." },
   standardHeaders: true,
   legacyHeaders: false,
});

/* ===============================
   Health Check
=============================== */

app.get("/api/health", (_req, res) => {
   res.json({ status: "ok" });
});

/* ===============================
   Routes
=============================== */


app.use('/api/users', userRoutes);
// createToolLimiter applied after toolRoutes so it only throttles POST /api/tools
// (GET, PATCH, DELETE on existing tools don't need the same limit)


// Start background jobs once on server start
// startTrendingJob();

Sentry.setupExpressErrorHandler(app);

export default app;
