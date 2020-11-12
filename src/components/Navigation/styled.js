import styled, { css } from 'styled-components';

export const NavigationBar = styled.header`
  ${({ theme }) => theme.mixins.flexItemsBetween};

  position: fixed;
  top: 0;
  width: 100%;
  padding: 0px 40px;
  height: var(--nav-height);
  font-weight: var(--weight-light);
  background-color: ${({ theme }) => theme.colorMainBackground};
  transition: var(--transition);
  filter: none;
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

export const MainNavigation = styled.nav`
  display: flex;

  ul {
    margin-left: 40px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
