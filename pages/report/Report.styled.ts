import styled from "styled-components";

const StyledReport = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  align-items: center;
  place-content: center;

  @media (max-width: 1000px) {
    & > form {
      width: 100%;
    }
  }
`;

export default StyledReport;
