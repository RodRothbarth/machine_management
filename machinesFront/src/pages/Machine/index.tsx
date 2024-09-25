import { ListItem } from "../../components/ListItem";
import { useState } from "react";
import { IMachine } from "./IMachine.ts";
import { Container, ListHeaderContainer } from "./styles.ts";
import { MachineForm } from "./MachineForm";

export function Machine() {
  const [machines, setMachines] = useState<IMachine[]>([
    { name: "teste", type: "tes" },
  ]);

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
