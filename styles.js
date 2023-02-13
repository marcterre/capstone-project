import { createGlobalStyle } from "styled-components";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
:root{
  --color-darkblue: #255D83;
  --color-buttons: #DABF8E;
  --color-icons-filling-black: #000;
  --color-list-items-white: #FFFEFE;
  --color-background: #f8f9fa;
  --color-project-active: #2C9E45;
  --color-project-inactive: #B20E0E;
  --color-status-active: #32A020;
  --color-status-inactive: #D94040;

  --border-yellow: 0.2em solid var(--color-buttons);
  --border-darkblue: 0.2em solid var(--color-darkblue);
  --box-shadow-darkblue:  0 0.3em 0.5em 0 rgb(37, 93, 131, 0.5);
  --box-shadow-black:  0 0.2em 0.4em 0 rgb(0, 0, 0, 0.3);

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
