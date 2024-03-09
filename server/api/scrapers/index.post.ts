import { db } from "~/composables/db";
import {
  InsertScraper,
  scraper,
  scraperTag,
} from "~/composables/db/schemas/scraper";
import { randomUUID } from "crypto";

export default defineEventHandler(async (e) => {
  const body = await readBody<InsertScraper & { tags?: string[] }>(e);

  await db
    .insert(scraper)
    .values({
      id: randomUUID(),
      name: body.name,
      url: body.url,
    })
    .returning()
    .then((res) => {
      body.tags?.forEach(async (tag) => {
        await db.insert(scraperTag).values({
          id: randomUUID(),
          name: tag,
          scraperId: res[0].id,
        });
      });
    });

  console.log(body);
});

export type ScraperResponse = {
  scrapers: {
    name: string;
    tags: string[];
    url: string;
  }[];
  length: number;
};
