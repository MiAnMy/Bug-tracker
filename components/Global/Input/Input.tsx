import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from "react";
import StyledInput from "./Input.styled";

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = (props, ref) => {
  return <StyledInput {...props} ref={ref} />;
};

export default forwardRef(Input);
