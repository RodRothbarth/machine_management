import { ListItem } from "../../components/ListItem";
import { useState } from "react";
import { IMachine } from "./IMachine.ts";
import { Container } from "./styles.ts";

export function Machine() {
  const [machines, setMachines] = useState<IMachine[]>([
    { name: "teste", type: "tes" },
  ]);

  return (
    <Container>
      {/*<MachineForm></MachineForm>*/}
      <h2>Machinas</h2>
      {machines.map((item: IMachine) => (
        <ListItem machine={item} />
      ))}
    </Container>
  );
}
