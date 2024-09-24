import { AuthRoutes } from "./AuthRoutes.tsx";
import { useAuth } from "../hooks/useAuth.ts";

export function Routes() {
  const { user } = useAuth();
  console.log(user);
  if (user) {
    return <p>OI</p>;
  }

  return <AuthRoutes />;
}
