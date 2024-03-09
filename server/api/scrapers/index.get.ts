import { db } from "~/composables/db";
import { scraper } from "~/composables/db/schemas/scraper";
export default defineEventHandler(async () => {
  const scrapers = await getScrapers();
  return {
    scrapers,
    length: scrapers.length,
  };
});

export type ScraperResponse = {
  scrapers: {
    name: string;
    tags: string[];
    url: string;
  }[];
  length: number;
};

async function getScrapers() {
  const scrapers = await db.select().from(scraper);

  console.log(`Scrapers: ${JSON.stringify(scrapers)}`);
  return scrapers;
}
