import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

const database = new Database("./skillsphere.db");

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
