import { createClient } from "redis";

const client = createClient({
  url: `redis://redis-13760.c80.us-east-1-2.ec2.redns.redis-cloud.com:13760`,
  username: 'default',
  password: 'kDEHvSEceA2MYoM2YiCjoBtsKqQKKtJi'
})

client.on("error", (err) => console.log("Redis error: " + err))
