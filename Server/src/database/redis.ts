import 'dotenv/config'
import { createClient } from "redis";

const { REDIS_URL, REDIS_USERNAME, REDIS_PASSWORD } = process.env;

console.log(REDIS_URL, REDIS_USERNAME, REDIS_PASSWORD)

const client = createClient({
  url: REDIS_URL,
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD
});

client.on("error", (err) => console.log("Redis error: " + err))
