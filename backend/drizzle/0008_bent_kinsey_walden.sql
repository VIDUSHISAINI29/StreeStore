CREATE TABLE "incidents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"endpoint_id" uuid NOT NULL,
	"title" text NOT NULL,
	"status" text DEFAULT 'OPEN' NOT NULL,
	"started_at" timestamp DEFAULT now() NOT NULL,
	"resolved_at" timestamp,
	"duration_seconds" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_endpoint_id_endpoints_id_fk" FOREIGN KEY ("endpoint_id") REFERENCES "public"."endpoints"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "endpoints" DROP COLUMN "status";