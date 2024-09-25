import { Container, Div, Name } from "./styles.tsx";
import { CustomButton } from "../Button/CustomButton.tsx";

export function ListItem({ machine }) {
  return (
    <Container>
      <Name>{machine.name}</Name>
      <Name>{machine.type}</Name>
      <Div>
        <CustomButton title="Editar" />
        <CustomButton title="Excluir" $delete />
      </Div>
    </Container>
  );
}
