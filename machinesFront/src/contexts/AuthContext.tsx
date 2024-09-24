import { createContext, ReactNode, useState } from "react";

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextDataProps = {
  user: IUserContext | null;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

interface IUserContext {
  role: string;
  id?: string;
  email?: string;
}
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUserContext | null>(null);

  // function signIn(token: string) {
  //   const userInfos: any = decodeToken(token);
  //
  //   setUser({
  //     role: userInfos.profile.name,
  //     id: userInfos._id,
  //     email: userInfos.email,
  //   });
  // }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
