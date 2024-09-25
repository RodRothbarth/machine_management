import { Select, StyledOption } from "./styles.ts";
import { ChangeEvent } from "react";

interface SelectProps {
  options: { name: string; model: string; _id: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export function CustomSelect({ options, onChange }: SelectProps) {
  return (
    <Select onChange={(event) => onChange(event)}>
      <StyledOption key="0" value=""></StyledOption>
      {options.map((option) => (
        <StyledOption key={option._id} value={option._id}>
          {option.name}
        </StyledOption>
      ))}
    </Select>
  );
}
