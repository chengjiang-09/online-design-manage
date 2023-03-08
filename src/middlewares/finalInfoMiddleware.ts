import { Context, Next } from "koa";
import Response from "../utils/response";
import { finalInfoLogger } from '../logger'

//兜底用的错误捕捉中间件
async function finalInfoMiddleware(ctx: Context, next: Next) {
  try {
    await next();
  } catch (err) {
    const errorStr = (err as Error).message

    finalInfoLogger.info(errorStr)
    Response.error(ctx, errorStr, 500);
  }
}

export default finalInfoMiddleware
