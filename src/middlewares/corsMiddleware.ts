import { Context, Next } from "koa";

//跨域中间件
async function corsMiddleware(ctx: Context, next: Next) {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length,Authorization,Accept,X-Requested-With"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
}

export default corsMiddleware;
