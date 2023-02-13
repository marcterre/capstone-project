import { createGlobalStyle } from "styled-components";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
:root{
  --color-darkblue: #255D83;
  --color-buttons-yellow: #E6AC15;
  --color-icons-filling-black: #000;
  --color-list-items-white: #FFFEFE;
  --color-background: #fff;
  /* --color-background: #D9DDE9; */
  --color-project-active: #2C9E45;
  --color-project-inactive: #B20E0E;
  --color-status-active: #32A020;
  --color-status-inactive: #D94040;

  --border-yellow: 0.2em solid var(--color-buttons-yellow);
  --border-darkblue: 0.2em solid var(--color-darkblue);
  --box-shadow-darkblue:  0 0.3em 0.5em 0 rgb(37, 93, 131, 0.5);
  --box-shadow-black:  0 0.3em 0.5em 0 rgb(0, 0, 0, 0.3);
  --box-shadow-card: inset 0 -3em 3em rgba(37, 93, 131, 0.1),
    0 0 0 2px rgb(190, 190, 190), 0.3em 0.3em 1em rgba(37, 93, 131, 0.3);

}


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 0 0 3.5em 0;
    background-color: var(--color-background);
    font-family: ${inter.style.fontFamily};
  }
`;
