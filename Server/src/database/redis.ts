import { createClient } from "redis";

const { REDIS_URL, REDIS_USERNAME, REDIS_PASSWORD } = process.env;

export const redisClient = createClient({
  url: REDIS_URL,
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD
});

redisClient.on("error", (err) => console.log("Redis error: " + err))
