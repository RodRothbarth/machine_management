import { Request, Response } from "express";
import { AppError } from "../shared/errorHandling/appError";

class LoginController {
  login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    const loginCred = true;

    if (!loginCred) {
      throw new AppError("Email ou senha incorretos", 401);
    }
    return res.status(200).json(loginCred);
  };
}
export default new LoginController();
