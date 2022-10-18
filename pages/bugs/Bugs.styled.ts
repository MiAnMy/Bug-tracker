import styled from "styled-components";

const StyledBugs = styled.main`
  margin-top: 20px;

  table {
    margin: auto;

    @media (max-width: 1000px) {
      button > span {
        display: none;
      }
    }
  }
`;

export default StyledBugs;
