ALTER TABLE "endpoints" ADD COLUMN "current_status" text DEFAULT 'UP';--> statement-breakpoint
ALTER TABLE "endpoints" ADD COLUMN "consecutive_failures" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "endpoints" ADD COLUMN "uptime_percentage" integer DEFAULT 100;--> statement-breakpoint
ALTER TABLE "endpoints" ADD COLUMN "average_response_time" integer;--> statement-breakpoint
ALTER TABLE "endpoint_checks" ADD COLUMN "latency_category" text;