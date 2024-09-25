import { ListItem } from "../../components/ListItem";
import { useEffect, useState } from "react";
import { IMachine } from "./IMachine.ts";
import { Container, ListHeaderContainer } from "./styles.ts";
import { MachineForm } from "./MachineForm";
import { getAllMachines } from "../../services/machineService.ts";

export function Machine() {
  const [machines, setMachines] = useState<IMachine[]>([
    { name: "teste", type: "tes" },
  ]);

  async function getMachines() {
    const response = await getAllMachines({
      sort: {
        orderBy: "name",
        order: "desc",
      },
    });
    console.log("response", response);
    setMachines(response);
  }

  useEffect(() => {
    getMachines();
  }, [machines]);

  return (
    <Container>
      <MachineForm />
      <h2>Machinas</h2>
      <ListHeaderContainer>
        <p>Nome</p>
        <p>Tipo</p>
        <p></p>
        <p></p>
      </ListHeaderContainer>
      {machines.map((item: IMachine) => (
        <ListItem machine={item} />
      ))}
    </Container>
  );
}
