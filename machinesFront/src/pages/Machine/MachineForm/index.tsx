import { CustomInput } from "../../../components/Input";
import { useEffect, useState } from "react";
import { CustomButton } from "../../../components/Button/CustomButton.tsx";
import { FormContainer } from "./styles.ts";
import { CustomSelect } from "../../../components/Select/Select.tsx";
import {
  createMachine,
  getAllSensors,
} from "../../../services/machineService.ts";

export function MachineForm() {
  const [newMachine, setNewMachine] = useState({
    name: "",
    type: "",
    monitoringPoint: [],
  });
  const [sensors, setSensors] = useState([
    {
      _id: "",
      name: "",
      model: "",
    },
  ]);
  const [selectedValue, setSelectedValue] = useState<string>("option1");

  function handleFormInput(identifier: string, value: string) {
    setNewMachine((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
        monitoringPoint: [selectedValue],
      };
    });
  }
  async function onSubmmit(event) {
    event.preventDefault();

    try {
      await createMachine(newMachine);
    } catch (e) {
      console.error(e.message);
    }
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(event.target.value);
  }

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
  }, []);
  return (
    <FormContainer>
      <form
        onSubmit={async (event) => {
          await onSubmmit(event);
        }}
      >
        <CustomInput
          label="Nome"
          onChange={(event) => handleFormInput("name", event.target.value)}
        />
        <CustomInput
          label="Tipo"
          onChange={(event) => handleFormInput("type", event.target.value)}
        />
        <CustomSelect options={sensors} onChange={handleSelect}></CustomSelect>
        <CustomButton title="Salvar" />
      </form>
    </FormContainer>
  );
}
