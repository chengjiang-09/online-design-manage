import { Context, Next } from "koa";
import { redisLogger } from "../logger";

//登录日志
function loginLoggerMiddleware(ctx: Context, next: Next) {
  const path = ctx.path;

  if (path == "/design/login/email") {
    const data = ctx.request.body;

    let email = data.email;
    const logStr = `用户登录 email:${email} path:${ctx.path} | method: ${ctx.method} | ua:${ctx.headers["user-agent"]}`;
    redisLogger.info(logStr);
  }
  return next();
}

export default loginLoggerMiddleware