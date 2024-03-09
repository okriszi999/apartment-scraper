CREATE TABLE IF NOT EXISTS "scraper" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "scraper_tag" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"scraper_id" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scraper_tag" ADD CONSTRAINT "scraper_tag_scraper_id_scraper_id_fk" FOREIGN KEY ("scraper_id") REFERENCES "scraper"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
