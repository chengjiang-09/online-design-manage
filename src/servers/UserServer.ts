import User from "../models/User";
import createPack from "../utils/createPack";

class UserServer {
  findUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }
  createUser(userData: object) {
    let createObj = createPack(userData)
    return User.create(createObj)
  }
}

export default new UserServer;
