import { IUser } from "./IUser";
import USER from "./userSchema";
import { IFilter } from "../../shared/utils/IFilter";

class UserDBQuery {
  createNewUser = async (userInfo: IUser) => {
    return await USER.create(userInfo);
  };
  getAll = async (filter: IFilter) => {
    return await paginatedResults(filter, USER);
  };

  getUser = async (id: string) => {
    return Promise.resolve(await USER.findById(id).populate("profile"));
  };
  getUserByProfile = async (profileId: string) => {
    return Promise.resolve(await USER.findOne({ profile: profileId }));
  };

  edit = async (id: string, userInfo: IUser) => {
    return Promise.resolve(await USER.findOneAndUpdate({ _id: id }, userInfo));
  };

  delete = async (id: string) => {
    return Promise.resolve(await USER.findOneAndDelete({ _id: id }));
  };
}

export default new UserDBQuery();
