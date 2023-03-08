import { Context, Next } from "koa";
import { reqLogger } from "../logger";

//请求信息记录中间件
function reqLoggerMiddleware(ctx:Context, next:Next){
    const logStr = `path:${ctx.path} | method: ${ctx.method} | ua:${ctx.headers["user-agent"]}`
    reqLogger.info(logStr)
    return next()
}

export default reqLoggerMiddleware