import { Context } from "koa";
import response from "../utils/response";
import UserServer from "../servers/UserServer";
import RoleServer from "../servers/RoleServer";
import { sign } from "../utils/auth";
import config from "../configs/config";
import { redisGet } from "../db/redis";
import { encryptionMD5, verifyRegularByRE } from "../utils/utils";
import { UserCreationAttributes } from "../models/Users";
import RouterServer from "../servers/RouterServer";
import Role from "../models/Roles";

class LoginController {
  async loginByEmail(ctx: Context) {
    const data = ctx.request.body;

    let email = data.email;
    let code = data.code;

    if (email && verifyRegularByRE(email, config.regExp.email) && code) {
      const verify_data = await redisGet(
        `${config.redis.redis_verify_login.key}${email}`
      );

      if (verify_data == code) {
        let user = (await UserServer.findUserByEmail(
          email
        )) as unknown as UserCreationAttributes;
        if (user) {

          let role = await RoleServer.getRoleData(user.dataValues.role_id as number);

          if (role) {
            let routes = await RouterServer.getRouter(role.dataValues.role_weight);

            response.success(ctx, "登录成功", 0, {
              token: sign(user),
              routes,
            });
          } else {
            response.error(ctx, "数据库错误");
          }
        } else {
          let user = await UserServer.createUser({
            email,
            user_name: email,
            role_id: 1,
            group_id: JSON.stringify([0, 1]),
          } as UserCreationAttributes);
          let role = await RoleServer.getRoleData(user.role_id);

          if (role) {
            role = role.toJSON() as Role;

            let routes = await RouterServer.getRouter(role.role_weight);

            response.success(ctx, "登录成功", 0, {
              token: sign(user),
              routes,
            });
          } else {
            response.error(ctx, "数据库错误");
          }
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
        response.success(ctx, "登录成功", 0, {
          token: sign(user),
        });
      } else {
        return response.error(ctx, "账户或密码错误", 2001);
      }
    }
  }
}

export default new LoginController();
