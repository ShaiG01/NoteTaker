import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

console.log("TOKEN exists:", !!process.env.UPSTASH_REDIS_REST_TOKEN);

const Limit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, "10s"),
});

export default Limit;