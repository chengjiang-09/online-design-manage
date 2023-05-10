import { Context } from "koa";
import config from "../configs/config";
import { redisSet } from "../db/redis";
import { smtpLogger } from "../logger";
import { sendVerificationCode } from "../utils/emailVerificationCode";
import { getVerifyCode, verifyRegularByRE } from "../utils/utils";
import response from '../utils/response'

class EmailCodeController {
  async sendCode(ctx: Context) {
    
    const data = ctx.request.query;

    let email = data.email as string;
    if (
      email &&
      verifyRegularByRE(email, config.regExp.email)
    ) {
      
      let code = getVerifyCode();

      try {
        response.success(ctx, 'success')
        sendVerificationCode(email, code).then(async () => {
          await redisSet(
            `${config.redis.redis_verify_login.key}${email}`,
            code,
            config.redis.redis_verify_login.expire
          );
        }).catch(() => {
          response.error(ctx, 'error')
        });
      } catch (err) {
        response.error(ctx, 'error')
        smtpLogger.info((err as Error).message);
      }
    }else {
      response.error(ctx, '邮箱为空或违规')
    }
  }
}

export default new EmailCodeController();
