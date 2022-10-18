import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --background-color: #000002;
  --color: #f8f6fb;
  --primary: #292639;
  --success: #2a9679;
  --error: #ff5c5c;
  --warning: #e88a38;
  --selected: #8c81c2;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
}

* {
  margin: 0;
  padding: 0;
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--background-color) 0%,
    var(--primary) 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: var(--color);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;

export default GlobalStyles;
