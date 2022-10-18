import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import StyledButton, { Props as StyledProps } from "./Button.styled";

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  StyledProps;

const Button: FC<Props> = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
