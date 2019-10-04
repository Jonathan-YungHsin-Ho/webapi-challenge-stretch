import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    // background-color: #081b33;
    // color: #767d92;
    text-align: center;
    line-height: 1.5;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;
