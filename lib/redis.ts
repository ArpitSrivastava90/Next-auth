import { Redis } from "@upstash/redis";

if (
  !process.env.UPSTASH_REDIS_REST_URL ||
  !process.env.UPSTASH_REDIS_REST_TOKEN
) {
  throw new Error("Redis URL or token is missing in environment variables!");
}

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

console.log("✅ Redis client created");
console.log("Url --> ", process.env.UPSTASH_REDIS_REST_URL);
console.log("token --> ", process.env.UPSTASH_REDIS_REST_TOKEN);
