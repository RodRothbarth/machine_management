import { formToJSON, postForm } from "axios";
import { CustomInput } from "../../../components/Input";
import { useState } from "react";
import { IMachine } from "../IMachine.ts";
import { CustomButton } from "../../../components/Button/CustomButton.tsx";
import { FormContainer } from "./styles.ts";

export function MachineForm() {
  const [machineInfo, setMachineInfo] = useState<IMachine>({
    name: "",
    type: "",
  });

  function onSubmmit() {}

  return (
    <FormContainer>
      <form onSubmit={onSubmmit}>
        <CustomInput
          label="Nome"
          // onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomInput
          label="Tipo"
          // onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomButton title="Salvar" />
      </form>
    </FormContainer>
  );
}
