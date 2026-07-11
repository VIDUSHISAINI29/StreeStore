ALTER TABLE "endpoints" ALTER COLUMN "uptime_percentage" SET DATA TYPE numeric(5, 2);--> statement-breakpoint
ALTER TABLE "endpoints" ALTER COLUMN "uptime_percentage" SET DEFAULT '100.00';