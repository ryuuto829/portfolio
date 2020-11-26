import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => theme.mixins.flexItemsBetween};

  position: fixed;
  top: 0;
  width: 100%;
  padding: 0px var(--space-extra);
  height: var(--nav-height);
  background-color: ${({ theme }) => theme.bgTransparent};
  backdrop-filter: blur(10px);
  filter: none;
  z-index: 15;
  transition: var(--transition);

  ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      ${({ theme }) => theme.mixins.boxShadow};

      height: var(--nav-height-scroll);
      transform: translateY(0px);
    `};

  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      ${({ theme }) => theme.mixins.boxShadow};

      height: var(--nav-height-scroll);
      transform: translateY(calc(var(--nav-height-scroll) * -1));
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
