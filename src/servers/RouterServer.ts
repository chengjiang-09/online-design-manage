import Router from "../models/Routers";
import { Op } from "sequelize";
class RouterServer {
  /**
   * 根据身份权重查询合法路由
   *
   * @param role_weight
   * @returns
   */
  getRouter(role_weight: number) {
    return Router.findAll({
      where: { permission_weight: { [Op.lt]: role_weight } },
    });
  }
}

export default new RouterServer();
