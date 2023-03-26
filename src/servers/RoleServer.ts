import Role from "../models/Roles";

class RoleServer {
  /**
   * 查询对应身份id的权限权重
   *
   * @param role_id
   * @returns
   */
  getRoleData(role_id: number) {
    return Role.findOne({ where: { id: role_id } });
  }
}

export default new RoleServer();
