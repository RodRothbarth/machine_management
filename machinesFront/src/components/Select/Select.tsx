import { Select, StyledOption } from "./styles.ts";

interface SelectProps {
  options: { label: string; value: string }[];
}

export function CustomSelect({ options }: SelectProps) {
  return (
    <Select>
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </Select>
  );
}
