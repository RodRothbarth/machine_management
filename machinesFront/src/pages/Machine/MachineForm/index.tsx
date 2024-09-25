import { CustomInput } from "../../../components/Input";
import { useEffect, useState } from "react";
import { CustomButton } from "../../../components/Button/CustomButton.tsx";
import { FormContainer } from "./styles.ts";
import { CustomSelect } from "../../../components/Select/Select.tsx";
import { getAllSensors } from "../../../services/machineService.ts";

export function MachineForm() {
  const [sensors, setSensors] = useState([
    {
      label: "Teste",
      value: "oi",
    },
  ]);

  function onSubmmit() {}

  async function getSensor() {
    const { resultData } = await getAllSensors({
      sort: {
        orderBy: "name",
        order: "desc",
      },
    });
    setSensors(resultData);
  }

  useEffect(() => {
    getSensor();
  }, [sensors]);
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
        <CustomSelect options={sensors}></CustomSelect>
        <CustomButton title="Salvar" />
      </form>
    </FormContainer>
  );
}
