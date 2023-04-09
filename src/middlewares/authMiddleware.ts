import { Context, Next } from "koa";
import config from "../configs/config";
import Jwt from "../utils/auth";
import response from "../utils/response";
// import Path from 'path'

//jwt验证中间件
function authMiddleware(ctx: Context, next: Next) {
  const path = ctx.path;
  
  //校验jwt白名单
  if (!config.jwt.jwt_unless.includes(path) && !config.jwt.jwt_unless.includes(`${path} ${ctx.method}`)) {
    const token = ctx.headers.authorization?.split(" ")[1];

    if (token !== undefined && token !== "") {
      const { error, userData } = Jwt.verify(token as string);
      if (error !== null) {
        return response.error(ctx, "token 验证失败", 4000);
      } else {
        ctx.userData = userData
        return next();
      }
    } else {
      return response.error(ctx, "未登录", 4001);
    }
  }

  return next();
}

export default authMiddleware;
