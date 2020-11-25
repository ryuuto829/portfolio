import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => theme.mixins.flexItemsBetween};

  position: fixed;
  top: 0;
  width: 100%;
  padding: 0px 40px;
  height: var(--nav-height);
  font-weight: var(--weight-light);
  background-color: ${({ theme }) => theme.colorBackgroundDimmed};
  backdrop-filter: blur(10px);
  transition: background-color 0.25s ease-in-out, height 0.25s ease-in-out;
  filter: none;
  z-index: 15;

  ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      ${({ theme }) => theme.mixins.boxShadow};

      height: var(--nav-height-scroll);
      transform: translateY(0px);
      transition: var(--transition);
    `};

  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      ${({ theme }) => theme.mixins.boxShadow};

      height: var(--nav-height-scroll);
      transform: translateY(calc(var(--nav-height-scroll) * -1));
      transition: var(--transition);
    `};

  nav {
    ${({ theme }) => theme.mixins.flexItemsCenter};
  }

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;
