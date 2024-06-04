import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body,
h1, h2, h3 {
  margin: 0;
}

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  };

  p {
    margin: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }
  
`;

export default GlobalStyle;
