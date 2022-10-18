import styled from "styled-components";

type Prop = {
  formWidth?: string;
};

const StyledForm = styled.form<Prop>`
  display: flex;
  flex-direction: column;
  width: ${({ formWidth }) => (formWidth ? formWidth : "max-content")};
  padding: 20px 20px 0px 20px;
  border: 2px solid var(--primary);
  box-sizing: border-box;
  background-color: var(--background-color);

  header {
    font-size: 1.45rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
  }

  .message {
    color: var(--error);
    font-size: 0.65rem;
    margin: 0;
    margin-bottom: 5px;
  }

  .message.success {
    color: var(--success);
  }

  footer {
    padding: 5px 0px;
    font-size: 0.65rem;
    margin-left: auto;
  }
`;

export default StyledForm;
