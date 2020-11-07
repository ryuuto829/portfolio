import styled, { css } from 'styled-components';

export const NavWrapper = styled.header`
  ${({ theme }) => theme.mixins.flexItemsBetween};

  position: fixed;
  width: 100%;
  height: var(--nav-height);
  top: 0;
  font-weight: var(--weight-light);
  padding: 0px 40px;
  background-color: var(--almost-black);
  transition: var(--transition);
  z-index: 5;

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

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const NavigationBar = styled.nav`
  display: flex;

  & > ul {
    margin-left: 40px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
