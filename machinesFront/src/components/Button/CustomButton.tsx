import { Button } from "./styles.ts";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface PropsButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  onLoading?: boolean;
}

export function CustomButton({
  title,
  onLoading,
  onClick,
  ...props
}: PropsButton) {
  return <Button onClick={onClick}>{title}</Button>;
}
