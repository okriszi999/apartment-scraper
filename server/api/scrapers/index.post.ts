export default defineEventHandler(async (e) => {
  const body = await readBody(e);
});

export type ScraperResponse = {
  scrapers: {
    name: string;
    tags: string[];
    url: string;
  }[];
  length: number;
};
