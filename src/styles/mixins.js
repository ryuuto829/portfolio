import { css } from 'styled-components';

const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid transparent;
  color: var(--light-gray);
  border-radius: 4px;
  font-size: 17px;
  overflow: hidden;
  transition: var(--transition);
  z-index: 1;
  color: ${({ theme }) => theme.mainText};

  svg {
    margin-right: 10px;
  }

  // Gradient layer
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    top: 2px;
    left: 2px;
    border-radius: 4px;
    background: ${({ theme }) => theme.mainBackground};
    transform: translate3d(0, 0, 0);
    transition: var(--transition);
    z-index: -1;
  }

  // Default background layer
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    /* ${({ theme }) => theme.mixins.gradient}; */
    background: var(--salmon);
    z-index: -3;
  }

  &:hover {
    background-color: transparent;
    color: var(--almost-black);

    &:before {
      background: transparent;
    }
  }
`;

const mixins = {
  // Buttons
  button,

  bigButton: css`
    ${({ theme }) => theme.mixins.button};

    display: inline-flex;
    height: 56px;
    min-width: 200px;
    padding: 4px 28px;
    font-weight: var(--weight-semibold);
    font-size: 17px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  `,

  smallButton: css`
    ${({ theme }) => theme.mixins.button};

    height: 48px;
    min-width: 100px;
    padding: 6px 20px;
    font-weight: var(--weight-normal);

    @media (max-width: 480px) {
      svg {
        display: none;
      }
    }
  `,

  // Flexbox
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

  // Box shadow / border
  boxShadow: css`
    border-bottom: 1px solid ${({ theme }) => theme.border};
  `,

  // Background
  gridBackground: css`
    background-color: transparent;
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 25%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 26%,
        transparent 27%,
        transparent 74%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 75%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 25%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 26%,
        transparent 27%,
        transparent 74%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 75%,
        rgba(${({ theme }) => theme.bgContrast}, 0.12) 76%,
        transparent 77%,
        transparent
      );
    background-size: 60px 60px;
    opacity: 0.35;
  `,

  // Links
  link: css`
    color: var(--salmon);
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0.3em;
      left: 0;
      background-color: var(--salmon);
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s;
    }

    &:hover {
      &:after {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
  `,

  bigLink: css`
    ${({ theme }) => theme.mixins.link};

    color: ${({ theme }) => theme.mainText};
    font-family: var(--family-secondary);
    font-size: clamp(var(--text-normal), 6vw, var(--text-large));

    &:after {
      bottom 0;
    }
  `
};

export default mixins;
