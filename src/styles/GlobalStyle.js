import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --white: #fff;
    --almost-black: #1d1c21;
    --light-gray: #dfdfdf;
    --light-blue: #90caf9;

    --slate: #b5bfd2;
    --black-transparent: rgba(29, 28, 33, 0.8);
    --white-transparent: rgba(255, 255, 255, 0.5);


    --family-primary: 'Roboto', Arial, sans-serif;
    --family-secondary: 'Oswald', Helvetica, Arial, sans-serif;
    --family-monospace: 'Roboto Mono', monospace;

    --text-small: 1.4rem;
    --text-normal: 1.7rem;

    --weight-light: 300;
    --weight-normal: 400;
    --weight-semibold: 500;
    --weight-bold: 600;

    --space-l: 4rem;

    --transition: all 0.25s ease-in-out;

    /* --nav-height-scroll: 70px; */
    --nav-height-scroll: 64px;
    --nav-height: 100px;
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
    background-color: ${({ theme }) => theme.colorMainBackground};
    color: ${({ theme }) => theme.colorMainText};
    font-family: var(--family-primary);
    font-size: var(--text-normal);
    line-height: 1;

    &.blur {
      overflow: hidden;

      #content  {
        /* filter: blur(5px) brightness(0.7); */
        filter: blur(5px) brightness(0.2);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }

      /* Hide shadow when sidebar is open */
      header {
        background-color: transparent;
        /* box-shadow: none; */
        border-bottom-color: transparent;
      }
    }
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colorMainBackground};

    @media (max-width: 1080px) {
      padding: 0 100px;
    }

    @media (max-width: 768px) {
      padding: 0 50px;
    }

    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    position: relative;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }

    /* &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(30deg,#d367c1 10%,#dedf40 25%,#62cb5c 50%,#00bbcb 75%,#ab79d6 90%);
    } */
  }

  /* Enable smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  svg {
    fill: currentColor;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
