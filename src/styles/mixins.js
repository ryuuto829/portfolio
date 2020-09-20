import { css } from 'styled-components';

const mixins = {
  // Styling for <a /> link
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    /* transition: var(--transition); */
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: var(--light-blue);
      outline: 0;
    }
  `
};

export default mixins;
