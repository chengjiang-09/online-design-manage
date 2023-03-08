import { Context, Next } from "koa";
import config from "../configs/config";
import Jwt from '../utils/auth'
import response from "../utils/response";

//jwt验证中间件
function authMiddleware(ctx:Context, next:Next) {
    const path = ctx.path
    //校验jwt白名单
    if(!config.jwt.jwt_unless.includes(path)){

        const token = ctx.headers.authorization?.split(" ")[1]
        
        if(token !== undefined && token !== ""){
            const { error } = Jwt.verify(token as string)
            if(error !== null){
                return response.error(ctx, 'token 验证失败', 4000)
            }else {
                return next()
            }
        }else {
            return response.error(ctx, 'token 为空', 4001)
        }
    }

    return next()
}

export default authMiddleware