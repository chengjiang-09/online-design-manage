import User, { UserCreationAttributes } from "../models/Users";

class UserServer {
  findUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }
  createUser(userData: UserCreationAttributes) {
    return User.create(userData);
  }
}

export default new UserServer();
