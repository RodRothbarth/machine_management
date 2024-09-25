import { CustomInput } from "../../../components/Input";
import { useEffect, useState } from "react";
import { CustomButton } from "../../../components/Button/CustomButton.tsx";
import { FormContainer, SelectContainer } from "./styles.ts";
import { CustomSelect } from "../../../components/Select/Select.tsx";
import {
  createMachine,
  getAllSensors,
} from "../../../services/machineService.ts";

export type ISensor = {
  _id: string;
  name: string;
  model: string;
};

export function MachineForm() {
  const [newMachine, setNewMachine] = useState({
    name: "",
    type: "",
    monitoringPoint: [{}, {}],
  });
  const [sensors, setSensors] = useState<ISensor[]>([
    {
      _id: "",
      name: "",
      model: "",
    },
  ]);
  const [selectedValue, setSelectedValue] = useState<ISensor>();

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

  function handleAddSensor() {
    if (newMachine.monitoringPoint.length <= 2) {
    }
    setNewMachine((prevState) => {
      return {
        ...prevState,
        monitoringPoint: [...prevState, selectedValue],
      };
    });
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log(sensors.find((sensor) => sensor._id === event.target.value));
    setSelectedValue(
      sensors.find((sensor) => sensor._id === event.target.value),
    );
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
    <form
      onSubmit={async (event) => {
        await onSubmmit(event);
      }}
    >
      <FormContainer>
        <CustomInput
          label="Nome"
          onChange={(event) => handleFormInput("name", event.target.value)}
        />
        <CustomInput
          label="Tipo"
          onChange={(event) => handleFormInput("type", event.target.value)}
        />
        <h3>Sensores</h3>
        <SelectContainer>
          {newMachine.monitoringPoint.map((select, index) => (
            <CustomSelect
              key={index}
              options={sensors}
              onChange={handleSelect}
            ></CustomSelect>
          ))}
        </SelectContainer>

        <CustomButton title="Salvar" />
      </FormContainer>
    </form>
  );
}
