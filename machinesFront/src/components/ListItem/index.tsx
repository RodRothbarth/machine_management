import { Container, Div, Name } from "./styles.tsx";

export function ListItem({ machine }) {
  return (
    <Container>
      <Name>{machine.name}</Name>
      <Name>{machine.type}</Name>
      <Div>
        <button>oi</button>
        <button>oi</button>
      </Div>
    </Container>
  );
}
