import styled from "styled-components";

const StyledTable = styled.table`
  width: 75%;
  background-color: var(--background-color);

  td,
  th {
    border: 1px solid var(--primary);
    padding: 15px;
  }

  th {
    font-size: 1.05rem;
    letter-spacing: 1px;
    text-align: center;
  }

  th::first-letter {
    text-transform: capitalize;
  }

  tbody > tr:nth-child(odd) {
    background-color: var(--primary);
  }

  tbody > tr:hover {
    background-color: var(--primary);
    opacity: 0.8;
  }

  td > * {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default StyledTable;
