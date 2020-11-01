import styled, { css } from 'styled-components';

export const NavWrapper = styled.header`
  ${({ theme }) => theme.mixins.flexItemsBetween};
  font-weight: var(--weight-light);
  padding: 0px 40px;
  height: var(--nav-height);
  width: 100%;
  position: fixed;
  top: 0;
  transition: top 0.3s;
  transition: var(--transition);
  background-color: var(--almost-black);
  z-index: 5;

  ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-height-scroll);
      transform: translateY(0px);
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    `};

  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-height-scroll);
      transform: translateY(calc(var(--nav-height-scroll) * -1));
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    `};
`;

export const ControlsMenu = styled.div`
  display: flex;

  & button {
    margin-right: 40px;
  }

  & > button:last-child {
    margin: 0;
    margin-left: 40px;
  }
`;

export const NavigationBar = styled.nav`
  display: flex;

  & > ul {
    margin-left: 40px;

    @media (max-width: 788px) {
      display: none;
    }
  }
`;
