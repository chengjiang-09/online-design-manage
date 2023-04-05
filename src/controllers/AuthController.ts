import { Context } from "koa";
import RoleServer from "../servers/RoleServer";
import RouterServer from "../servers/RouterServer";
import CanvasHeaderMenuServer from "../servers/CanvasHeaderMenuServer";
import response from "../utils/response";

class AuthController {
  async getRoutes(ctx: Context) {
    const {
      payload: { role_id },
    } = ctx.userData;

    let role = await RoleServer.getRoleData(role_id as number);

    if (role) {
      let routes = await RouterServer.getRouter(
        role.dataValues.role_weight as number
      );

      response.success(ctx, "获取路由成功", 0, {
        routes,
      });
    } else {
      response.error(ctx, "数据库错误");
    }
  }
  async getCanvasHeaderMenu(ctx: Context) {
    const canvasHeaderMenu = await CanvasHeaderMenuServer.getCanvasHeaderMenu();

    if (canvasHeaderMenu) {
      response.success(ctx, "获取画布头部导航选项成功", 0, canvasHeaderMenu);
    } else {
      response.error(ctx, "数据库错误");
    }
  }
}

export default new AuthController();
