import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --white: #fff;
    --almost-black: #1d1c21;
    --light-gray: #dfdfdf;
    --light-blue: #90caf9;

    --family-primary: 'Roboto', Arial, sans-serif;
    --family-secondary: 'Oswald', Helvetica, Arial, sans-serif;
    --family-monospace: 'Roboto Mono', monospace;

    --text-small: 1.4rem;
    --text-normal: 1.7rem;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: var(--almost-black);
    color: var(--light-gray);
    font-family: var(--family-primary);
    font-size: var(--text-normal);
    line-height: 1;

  /*
    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    } */
  }
`;

export default GlobalStyle;
