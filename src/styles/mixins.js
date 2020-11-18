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
    background: var(--almost-black);
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
    background: linear-gradient(
      269.16deg,
      #ffe580 -15.83%,
      #ff7571 -4.97%,
      #ff7270 15.69%,
      #ea5dad 32.43%,
      #c2a0fd 50.09%,
      #9867f0 67.47%,
      #3bf0e4 84.13%,
      #33ce43 105.13%,
      #b2f4b6 123.24%
    );
    background-position: 58% 50%;
    background-size: 500%;
    animation: gradient-shift 30s ease infinite;
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

  boxShadow: css`
    border-bottom: 1px solid #2e333e;
  `,

  gridBackground: css`
    background-color: transparent;
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        rgba(255, 255, 255, 0.12) 25%,
        rgba(255, 255, 255, 0.12) 26%,
        transparent 27%,
        transparent 74%,
        rgba(255, 255, 255, 0.12) 75%,
        rgba(255, 255, 255, 0.12) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        rgba(255, 255, 255, 0.12) 25%,
        rgba(255, 255, 255, 0.12) 26%,
        transparent 27%,
        transparent 74%,
        rgba(255, 255, 255, 0.12) 75%,
        rgba(255, 255, 255, 0.12) 76%,
        transparent 77%,
        transparent
      );
    background-size: 60px 60px;
    opacity: 0.35;
  `,

  gradient: css`
    background: linear-gradient(
      269.16deg,
      #ffe580 -15.83%,
      #ff7571 -4.97%,
      #ff7270 15.69%,
      #ea5dad 32.43%,
      #c2a0fd 50.09%,
      #9867f0 67.47%,
      #3bf0e4 84.13%,
      #33ce43 105.13%,
      #b2f4b6 123.24%
    );
    background-position: 58% 50%;
    background-size: 500%;
    animation: gradient-shift 30s ease infinite;
  `
};

export default mixins;
