import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--primary);
  box-sizing: border-box;

  div {
    display: flex;
    padding: 0px 0px 0px 10px;
    gap: 10px;

    & > span {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;
      align-self: center;
    }
  }

  a {
    line-height: 50px;
    font-size: 1rem;
    border: none;

    &.active {
      color: var(--selected);
    }

    &::first-letter {
      text-transform: capitalize;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    border-bottom: none;
    border-right: none;
    border-top: none;
  }
`;

export default StyledNavbar;
