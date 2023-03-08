import { Context } from "koa";
import response from "../utils/response";
import Jwt from '../utils/auth' 

class LoginController {
    index(ctx: Context) {   
        const token = Jwt.sign({
            username: 123
        })
        response.success(ctx, 'test',0, {
            token
        })
    }
}

export default new LoginController