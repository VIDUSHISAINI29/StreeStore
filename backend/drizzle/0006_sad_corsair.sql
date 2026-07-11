ALTER TABLE "endpoints" ALTER COLUMN "headers" SET DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "endpoints" ADD COLUMN "timeout" integer DEFAULT 10000 NOT NULL;--> statement-breakpoint
ALTER TABLE "endpoints" ADD COLUMN "request_body" text;--> statement-breakpoint
ALTER TABLE "endpoints" ADD COLUMN "follow_redirects" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "endpoints" ADD COLUMN "verify_ssl" boolean DEFAULT true NOT NULL;