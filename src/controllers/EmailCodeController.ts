import { Context } from "koa";
import config from "../configs/config";
import { redisSet, redisGet } from "../db/redis";
import { smtpLogger } from "../logger";
import { sendVerificationCode } from "../utils/emailVerificationCode";
import { getVerifyCode, verifyRegular } from "../utils/utils";

class EmailCodeController {
  async sendCode(ctx: Context) {
    const data = ctx.request.query;

    let email = data.email as string;
    if (
      email &&
      verifyRegular(email, config.regExp.email)
    ) {
      let code = getVerifyCode();

      const data = await redisGet(
        `${config.redis.redis_verify_login.key}${email}`
      );

      if (data) {
        return;
      }

      try {
        sendVerificationCode(email, code).then(async () => {
          await redisSet(
            `${config.redis.redis_verify_login.key}${email}`,
            code,
            config.redis.redis_verify_login.expire
          );
        });
      } catch (err) {
        smtpLogger.info((err as Error).message);
      }
    }
  }
}

export default new EmailCodeController();
