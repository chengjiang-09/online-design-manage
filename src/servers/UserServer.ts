import Role from "../models/Roles";
import User, { UserAttributes } from "../models/Users";

class UserServer {
  findUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }
  findUserById(id: string | number) {
    return User.findOne({ where: { id } });
  }
  findUserOrCreate(email: string, userData: UserAttributes) {
    return User.findOrCreate({
      where: { email },
      defaults: userData,
    });
  }
  findAllUsers(page: number = 1, limit: number = 9) {
    return User.findAndCountAll({
      limit: limit,
      offset: (page - 1) * limit,
      include: [
        {
          model: Role,
        },
      ],
    });
  }
  createUser(userData: UserAttributes) {
    return User.create(userData);
  }
  updateUserName(user: UserAttributes, id: string | number) {
    return User.update(user, { where: { id } });
  }
}

export default new UserServer();
