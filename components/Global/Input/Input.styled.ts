import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  border: 0px;
  padding: 10px 15px;
  font-size: 1rem;
  border-bottom: 1px solid var(--primary);
  background-color: transparent;
  color: var(--font);
  outline: none;
  margin-right: ${({ type }) => type === "checkbox" && "10px"};
  width: 100%;
  .error {
    border-color: var(--error);
  }

  &[type="checkbox"] {
    width: auto;
  }
`;

export default StyledInput;
