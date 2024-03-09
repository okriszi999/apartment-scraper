import { pgTable, text } from "drizzle-orm/pg-core";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const scraper = pgTable("scraper", {
  id: text("id").primaryKey(),
  name: text("name"),
  url: text("url"),
});

export const scraperTag = pgTable("scraper_tag", {
  id: text("id").primaryKey(),
  name: text("name"),
  scraperId: text("scraper_id").references(() => scraper.id),
});

export type Scraper = InferSelectModel<typeof scraper>;
export type InsertScraper = InferInsertModel<typeof scraper>;

export type ScraperTag = InferSelectModel<typeof scraperTag>;
export type InsertScraperTag = InferInsertModel<typeof scraperTag>;
