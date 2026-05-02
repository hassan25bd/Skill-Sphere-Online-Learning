import { betterAuth } from "better-auth";
import { getMigrations } from "better-auth/db/migration";
import Database from "better-sqlite3";
import path from "path";
import os from "os";

const dbPath = process.env.NODE_ENV === "production"
  ? path.join(os.tmpdir(), "skillsphere.db")
  : "./skillsphere.db";

const database = new Database(dbPath);

export const auth = betterAuth({
  database,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "change-this-dev-secret-to-a-real-random-value-32-chars",
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {}),
  },
});

// Auto-run migrations so the DB schema exists on first use (needed on Vercel /tmp)
getMigrations(auth.options)
  .then(({ runMigrations }) => runMigrations())
  .catch(() => {});
