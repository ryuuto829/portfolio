import { css } from 'styled-components';

const mixins = {
  // Mixin for styling <a /> link
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    /* transition: var(--transition); */
    cursor: pointer;

    &:hover,
    &:active {
      color: var(--light-blue);
      outline: 0;
    }
  `,

  // Mixin for styling <ul /> list
  list: css`
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  flexItemsCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexItemsBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  button: css`
    background-color: transparent;
    text-decoration: none;
    border: 0;
    /* outline: 0; */
    cursor: pointer;
  `
};

export default mixins;
