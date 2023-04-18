import { Context, Next } from "koa";
import response from "../utils/response";
import { finalInfoLogger } from "../logger";

//兜底用的错误捕捉中间件
async function finalInfoMiddleware(ctx: Context, next: Next) {
  try {
    await next();
  } catch (err) {
    finalInfoLogger.info(err);
    response.error(ctx, 'Internal Server Error', 500);
  }
}

export default finalInfoMiddleware;
