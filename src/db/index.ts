import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const tursoDatabaseUrl = process.env.TURSO_DATABASE_URL;
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN;

if (!tursoDatabaseUrl || !tursoAuthToken) {
  throw new Error("Missing Turso configuration");
}

const client = createClient({
  url: tursoDatabaseUrl,
  authToken: tursoAuthToken,
});

export const db = drizzle(client);
