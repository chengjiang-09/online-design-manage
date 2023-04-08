import User, { UserCreationAttributes } from "../models/Users";

class UserServer {
  findUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }
  findUserOrCreate(email: string, userData: UserCreationAttributes) {
    return User.findOrCreate({
      where: { email },
      defaults: userData,
    });
  }
  createUser(userData: UserCreationAttributes) {
    return User.create(userData);
  }
}

export default new UserServer();
