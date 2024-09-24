import { IUser } from "./IUser";
import UserDBQuery from "./userDBQuery";

class UserService {
  createNewUser = async (userInfo: IUser) => {
    return await UserDBQuery.createNewUser(userInfo);
  };
}

export default new UserService();
