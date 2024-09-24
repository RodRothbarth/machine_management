import { Container, Input, Label } from "./styles.ts";

export function CustomInput({ label, invalid, handleInputChange, ...props }) {
  return (
    <Container>
      <Label $invalid={invalid}>{label}</Label>
      <Input $invalid={invalid} {...props} />
    </Container>
  );
}
