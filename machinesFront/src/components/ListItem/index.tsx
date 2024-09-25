import { Container, Div, Name } from "./styles.tsx";
import { CustomButton } from "../Button/CustomButton.tsx";

export function ListItem({ machine, onDelete }) {
  return (
    <Container>
      <Name>{machine.name}</Name>
      <Name>{machine.type}</Name>
      <Div>
        <CustomButton title="Editar" />
        <CustomButton
          title="Excluir"
          onClick={() => onDelete(machine._id)}
          $delete
        />
      </Div>
    </Container>
  );
}
