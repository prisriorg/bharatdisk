import { defineConfig } from 'drizzle-kit';

const tursoDatabaseUrl = process.env.TURSO_DATABASE_URL;
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN;

if (!tursoDatabaseUrl || !tursoAuthToken) {
  throw new Error('Missing Turso configuration');
}
export default defineConfig({
  schema: './src/config/db/schema.ts',
  out: './migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: tursoDatabaseUrl,
    authToken: tursoAuthToken,
  },
});
