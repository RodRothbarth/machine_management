import { HeaderContainer, NavBar, NavBarList } from "./styles.ts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.ts";

export function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <HeaderContainer>
      <NavBar>
        <NavBarList>
          <li onClick={() => navigate("/")}>Home</li>
        </NavBarList>
      </NavBar>
    </HeaderContainer>
  );
}
