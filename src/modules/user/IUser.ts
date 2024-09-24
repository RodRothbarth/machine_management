import { Types } from "mongoose";

export interface IUser {
  name: string;
  password: string;
  email: string;
  profile: Types.ObjectId;
}
