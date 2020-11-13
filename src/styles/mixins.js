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
      /* color: var(--light-blue); */
      /* color: var(--slate); */
      color: var(--white);
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

  flexColumn: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  `,

  button: css`
    background-color: transparent;
    text-decoration: none;
    border: 0;
    /* outline: 0; */
    cursor: pointer;
  `,

  // boxShadow: css`
  //   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  //     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  // `

  boxShadow: css`
    border-bottom: 1px solid rgba(66, 82, 109, 0.5);
  `
};

export default mixins;
