import { AuthContainer, Main } from "./styles.ts";
import { CustomInput } from "../../../components/Input";
import { CustomButton } from "../../../components/Button/CustomButton.tsx";
import { useState } from "react";
import { loginService } from "../../../services/userService.ts";
import { useAuth } from "../../../hooks/useAuth.ts";

export function Login() {
  const { signIn } = useAuth();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  async function handleClick() {
    try {
      const { data } = await loginService(loginInfo);
      localStorage.setItem("jwt", data);
      signIn(data);
    } catch (e) {
      console.error("e", e.message);
    }
  }

  function handleInputChange(identifier: string, value: string) {
    setLoginInfo((prevState) => {
      return { ...prevState, [identifier]: value };
    });
  }

  // const emailNotValid = loginInfo.email && !loginInfo.email.includes("@");
  // const passwordNotValid =
  //   loginInfo.password && loginInfo.password.trim().length < 6;

  return (
    <Main>
      <AuthContainer>
        <CustomInput
          label="Email"
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomInput
          label="Senha"
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        <CustomButton title="teste" onClick={handleClick} />
      </AuthContainer>
    </Main>
  );
}
