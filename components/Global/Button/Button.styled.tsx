import styled from "styled-components";

export type Props = {
  theme?: "warning" | "success";
};

const StyledButton = styled.button<Props>`
  display: flex;
  gap: 10px;
  font-size: 1rem;
  padding: 10px 15px;
  background: var(--background-color);
  color: var(--font);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => `var(--${theme})`};

  &:hover {
    opacity: 0.8;
  }
`;

StyledButton.defaultProps = {
  theme: "primary"
};

export default StyledButton;
