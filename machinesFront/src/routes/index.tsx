import { AuthRoutes } from "./AuthRoutes.tsx";
import { useAuth } from "../hooks/useAuth.ts";

export function Routes() {
  const { user } = useAuth();
  return <AuthRoutes />;
}
