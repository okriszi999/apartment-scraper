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

function getScrapers() {
  return new Promise<typeof scrapers>((resolve) => {
    setTimeout(() => {
      return resolve(scrapers);
    }, 2500);
  });
}

const scrapers = [
  {
    name: "ingatlan.com",
    tags: [
      "I. district",
      "II. district",
      "IV. district",
      "V. district",
      "VI. district",
      "XVII. district",
    ],
    url: "https://www.ingatlan.com/",
  },
  {
    name: "otthonterkep.hu",
    tags: ["I. district", "II. district", "III. district", "IV. district"],
    url: "https://otthonterkep.hu/",
  },
  {
    name: "jofogas.hu",
    tags: ["I. district", "II. district", "III. district", "IV. district"],
    url: "https://www.jofogas.hu/",
  },
];
