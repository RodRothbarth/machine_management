import { Request, Response } from "express";
import UserService from "./userService";

class UserController {
  createUser = async (req: Request, res: Response): Promise<any> => {
    const userInfo = req.body;
    const newUser = await UserService.createNewUser(userInfo);

    return res.status(200).json(newUser);
  };
}

export default new UserController();
