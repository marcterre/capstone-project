import { createGlobalStyle } from "styled-components";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
:root{
  --color-darkblue: #255D83;
  --color-buttons-yellow: #F3BC09;
  --color-icons-filling-black: #000;
  --color-list-items-white: #FFFEFE;
  --color-background: #C0C3CE;
  --color-project-active: #2C9E45;
  --color-project-inactive: #B20E0E;
  --color-status-active: #55D940;
  --color-status-inactive: #D94040;

--border-yellow: 0.2em solid var(--color-buttons-yellow);
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
    padding: 0 0 3.5em 0;
    background-color: var(--color-background);
    font-family: ${inter.style.fontFamily};
  }
`;
