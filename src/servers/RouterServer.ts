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
  getRouteAll(page: number = 1, limit: number = 9){
    return Router.findAndCountAll({
      limit: limit,
      offset: (page - 1) * limit,
    })
  }
}

export default new RouterServer();
