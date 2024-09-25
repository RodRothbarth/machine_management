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
    const { resultData } = await getAllMachines({
      sort: {
        orderBy: "name",
        order: "desc",
      },
    });
    setMachines(resultData);
  }

  useEffect(() => {
    getMachines();
  }, []);

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
