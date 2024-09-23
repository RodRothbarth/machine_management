import { sign, verify } from "jsonwebtoken";

export const singInToken = (user: any) => {
  return sign(user, process.env.JWT_SECRET!, { expiresIn: "1d" });
};

export const decodeJwt = (token: string) => {
  return verify(token, process.env.JWT_SECRET);
};
