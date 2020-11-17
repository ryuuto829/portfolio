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
        backdrop-filter: blur(5px);
        pointer-events: none;
      }

      /* Hide shadow when sidebar is open */
      header {
        background-color: transparent;
        border-bottom-color: transparent;
        transform: translateY(0);
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

    &:last-child {
      ${({ theme }) => theme.mixins.boxShadow};
    }
  }

  .section-header {
    font-size: clamp(26px, 5vw, 32px);
    white-space: nowrap;
    margin: 10px 0 40px;

    font-weight: var(--weight-semibold);
    font-family: var(--family-secondary);
    position: relative;
    z-index: 5;

    &:before {
      ${({ theme }) => theme.mixins.gridBackground};

      display: block;
      content: "";
      position: absolute;
      top: -20px;
      left: 0px;
      width: 100%;
      height: 72px;
      z-index: -1;
    }
  }

  /* Enable smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  svg {
    fill: currentColor;
    vertical-align: middle;
  }

  ::selection{
    background: rgba(111,66,193,0.8);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;

    &:hover,
    &:active {
      color: var(--white);
      outline: 0;
    }
  }

  button {
    font-family: inherit;
    background-color: transparent;
    text-decoration: none;
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
