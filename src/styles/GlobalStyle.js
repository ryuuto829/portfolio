import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --almost-black: #1d1c21;
    --dark-gray: #27272c;
    --light-gray: #dfdfdf;
    --extra-light-gray: #f2f3f5;
    --light-blue: #90caf9;
    --slate: #b5bfd2;
    --dark-slate: #6d7583;
    --light-slate: #707886;
    /* --salmon: #ff7270; */
    --salmon: #ff8380;
    --almost-dark-gray: #2e333e;

    --black-transparent: rgba(29, 28, 33, 0.8);
    --white-transparent: rgba(255, 255, 255, 0.5);
    /* --gray-transparent: rgba(242,243,245,0.5); */
    --white-rgb: 255, 255, 255;
    --black-rgb: 0, 0, 0;

    --family-primary: 'Roboto', Arial, sans-serif;
    --family-secondary: 'Oswald', Helvetica, Arial, sans-serif;
    --family-monospace: 'Roboto Mono', monospace;

    --text-small: 1.4rem;
    --text-normal: 1.7rem;
    --text-large: 2.5rem;

    --space-small: 1rem;
    --space: 2rem;
    --space-large: 3rem;
    --space-extra: 4rem;
    --space-huge: 5rem;

    --weight-light: 300;
    --weight-normal: 400;
    --weight-semibold: 500;
    --weight-bold: 600;

    --border-radius: 6px;

    /* --easing: 0.3s ease-in-out; */
    /* --transition: all 0.25s ease-in-out; */
    --easing: 0.25s  cubic-bezier(0.645,0.045,0.355,1);
    --transition: all 0.25s  cubic-bezier(0.645,0.045,0.355,1);

    --nav-button-height: 32px;
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
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.mainBackground};
    color: ${({ theme }) => theme.mainText};
    font-family: var(--family-primary);
    font-size: var(--text-normal);
    font-weight: var(--weight-light);
    line-height: 1.6;
    transition: background-color var(--easing);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.blur {
      overflow: hidden;

      #content  {
        filter: blur(5px) brightness(0.2);
        backdrop-filter: blur(5px);
        pointer-events: none;
        user-select: none;
        pointer-events: none;
      }

      /* Hide shadow when sidebar is open */
      header {
        background-color: transparent;
        border-bottom-color: transparent;
        transform: translateY(0);
        color: var(--light-gray);
      }
    }
  }

  main {
    padding: 0px 150px;
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.mainBackground};
    transition: background-color var(--easing);

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
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 100px 0;

    &:last-of-type .section-header   {
      &:after {
        display: none;
      }
    }

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  .section-header {
    font-size: clamp(26px, 5vw, 32px);
    margin: 10px 0 40px;
    font-weight: var(--weight-semibold);
    font-family: var(--family-secondary);
    position: relative;
    z-index: 5;
    white-space: pre-line;

    /* Grid background */
    &:before {
      ${({ theme }) => theme.mixins.gridBackground};

      display: block;
      content: "";
      position: absolute;
      top: -20px;
      left: -50%;
      width: 200%;
      height: 120px;
      z-index: -1;
    }

    /* Underline */
    &:after {
      display: block;
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0px;
      width: 60px;
      height: 2px;
      z-index: -1;
      /* background-color: var(--salmon); */
      background-color: ${({ theme }) => theme.mainBackground};
    }
  }

  // Anchor link styling for the header in markdown file
  // Read more: https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/?=gatsby-remark-autolink-headers
  a.anchor-link.before {
    padding-right: 10px;

    svg {
      visibility: visible;
    }
  }

  img,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
    vertical-align: middle;
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
    &:focus,
    &:active {
      color: ${({ theme }) => theme.active};
      /* outline: 0; */
    }
  }

  button {
    color: inherit;
    font-family: inherit;
    background-color: transparent;
    text-decoration: none;
    border: 0;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ::selection {
    background: ${({ theme }) => theme.selection};
  }
`;

export default GlobalStyle;
