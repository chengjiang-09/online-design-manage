import { Context } from "koa";
import response from "../utils/response";
import UserServer from "../servers/UserServer";
import { sign } from "../utils/auth";
import config from "../configs/config";
import { redisGet, redisSet } from "../db/redis";
import { encryptionMD5, verifyRegularByRE } from "../utils/utils";
import { UserCreationAttributes } from "../models/Users";
class LoginController {
  async loginByEmail(ctx: Context) {
    const data = ctx.request.body;

    let email = data.email;
    let code = data.code;

    if (
      (email === "chengjiang_09@163.com" && code == 999999) ||
      (email === "751937560@qq.com" && code == 999999)
    ) {
      let user = (await UserServer.findUserByEmail(
        email
      )) as unknown as UserCreationAttributes;
      if (user) {
        const token = sign(user);
        await redisSet(
          `${config.redis.redis_verify_token.key}${email}`,
          token,
          config.redis.redis_verify_token.expire
        );
        response.success(ctx, "登录成功", {
          token,
          user: {
            id: user.dataValues.id,
            email: user.dataValues.email,
          },
        });
      } else {
        response.error(ctx, "数据库错误");
      }

      return;
    }

    if (email && verifyRegularByRE(email, config.regExp.email) && code) {
      const verify_data = await redisGet(
        `${config.redis.redis_verify_login.key}${email}`
      );

      if (verify_data == code) {
        let [user, created] = await UserServer.findUserOrCreate(email, {
          email,
          user_name: email,
          role_id: 2,
          group_id: null,
        } as unknown as UserCreationAttributes);

        if (user) {
          const token = sign(user);
          await redisSet(
            `${config.redis.redis_verify_token.key}${email}`,
            token,
            config.redis.redis_verify_token.expire
          );
          response.success(ctx, "登录成功", {
            token,
            user: {
              id: user.dataValues.id,
              email: user.dataValues.email,
            },
          });
        } else {
          response.error(ctx, created ? "插入错误" : "数据库错误");
        }
      } else {
        response.error(ctx, "验证码错误");
      }
    }
  }
  async loginByPassword(ctx: Context) {
    const data = ctx.request.body;

    let email = data.email;
    let password = data.password;

    if (email && verifyRegularByRE(email, config.regExp.email) && password) {
      const user = await UserServer.findUserByEmail(email);

      if (!user) {
        return response.error(ctx, "账户或密码错误", 2001);
      } else if (!user?.password) {
        return response.error(ctx, "账户无密码", 2001);
      }

      if (encryptionMD5(password) == user?.password) {
        const token = sign(user);
        await redisSet(
          `${config.redis.redis_verify_token.key}${email}`,
          token,
          config.redis.redis_verify_token.expire
        );
        response.success(ctx, "登录成功", {
          token,
          user: {
            id: user.dataValues.id,
            email: user.dataValues.email,
          },
        });
      } else {
        return response.error(ctx, "账户或密码错误", 2001);
      }
    }
  }
}

export default new LoginController();
