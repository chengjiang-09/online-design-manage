import ioredis, { Redis } from "ioredis";
import config from "../configs/config";
import { redisLogger } from "../logger";

let redisConnect: Redis;

function redis() {
  if (!redisConnect) {
    try {
      redisConnect = new ioredis({
        port: parseInt(config.redis.redis_port as string),
        host: config.redis.redis_host as string,
        db: parseInt(config.redis.redis_db as string),
        reconnectOnError(err) {
          const targetError = "READONLY";
          console.log(err.message);

          redisLogger.info(err.message);
          if (err.message.includes(targetError)) {
            return true;
          }
          return false;
        },
      });
      console.log("redis数据库链接成功");
    } catch (err) {
      redisLogger.info((err as Error).message || err);
    }
  }
}

export function redisGet(key: string) {
  return redisConnect.get(key);
}

export function redisSet(key: string, value: string | number, expire: number) {
  return redisConnect.set(key, value, "EX", expire);
}

export default redis;
