CREATE TABLE "endpoints" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"name" text NOT NULL,
	"url" text NOT NULL,
	"method" text NOT NULL,
	"status" text DEFAULT 'UP' NOT NULL,
	"last_checked_at" timestamp,
	"last_response_time" integer,
	"expected_status" integer DEFAULT 200 NOT NULL,
	"interval" integer DEFAULT 60 NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "endpoint_checks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"endpoint_id" uuid NOT NULL,
	"status" text NOT NULL,
	"status_code" integer,
	"response_time" integer,
	"error_message" text,
	"checked_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "endpoints" ADD CONSTRAINT "endpoints_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "endpoint_checks" ADD CONSTRAINT "endpoint_checks_endpoint_id_endpoints_id_fk" FOREIGN KEY ("endpoint_id") REFERENCES "public"."endpoints"("id") ON DELETE cascade ON UPDATE no action;