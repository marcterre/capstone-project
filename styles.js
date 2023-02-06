import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --color-darkblue: #255D83;
  --color-buttons-yellow: #F3BC09;
  --color-list-items-white: #FFFEFE;
  --color-background: #C0C3CE;
  --color-project-active: #2C9E45;
  --color-project-inactive: #B20E0E;


  --border-darkblue: 0.2em solid var(--color-darkblue);
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 0;
    background-color: var(--color-background);
  }
`;
