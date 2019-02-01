import { createGlobalStyle } from 'styled-components';
import { fluidTypography, defaultFont } from 'utilities';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    ${fluidTypography({ minFontSize: 16, maxFontSize: 20 })};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${defaultFont};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;