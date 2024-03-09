import { type Config } from "drizzle-kit";

export default {
  driver: "pg",
  out: "composables/db/migrations",
  schema: "composables/db/schemas",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
