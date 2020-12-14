import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  ${({ theme }) => theme.mixins.flexItemsCenter};
`;

export const ControlsMenu = styled.div`
  display: ${({ showSidebar }) => (!showSidebar ? 'flex' : 'none')};

  ul {
    margin-left: var(--space-extra);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const DrawerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: var(--space-extra);
  }
`;

export const SideMenu = styled.aside`
  ${({ theme }) => theme.mixins.flexColumn};

  visibility: ${({ showSidebar }) => (showSidebar ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background-color: transparent;
  transform: translateX(${({ showSidebar }) => (showSidebar ? '0' : '100vw')});
  transition: transform var(--easing);
  padding: 80px;
  overflow-y: auto;
  overflow-x: hidden;
  outline: 0;
  z-index: 10;
  color: var(--light-gray);

  &::-webkit-scrollbar {
    display: none;
  }

  .inner-content {
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }

  /* Languages menu */
  div > ul:last-child {
    justify-content: flex-end;
    margin-top: var(--space);
    margin-bottom: var(--space-large);
  }

  @media (max-width: 480px) {
    padding-right: 25px;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  position: relative;
  width: 40px;
  height: 40px;
  padding: 5px;
  box-sizing: content-box;
  transition: var(--transition);
  z-index: 20;

  &:hover {
    div,
    div:before,
    div:after {
      background-color: ${({ theme }) => theme.colorActive};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Hamburger = styled.div`
  display: block;
  margin-top: -2px;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 75ms;

  ${({ showSidebar }) =>
    showSidebar &&
    css`
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotate(45deg);
    `};

  ${({ showSidebar }) =>
    showSidebar
      ? css`
          background-color: var(--light-gray);
        `
      : css`
          background-color: ${({ theme }) => theme.colorMainText};
        `};

  &,
  &:before,
  &:after {
    position: absolute;
    width: 40px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: var(--border-radius);
  }

  &:before,
  &:after {
    display: block;
    content: '';
    background-color: inherit;
  }

  &:before {
    top: -10px;
    transition: top 75ms ease 0.12s, opacity 75ms ease;
  }

  &:after {
    bottom: -10px;
    transition: bottom 75ms ease 0.12s,
      transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${props =>
    props.showSidebar &&
    css`
      &:before {
        top: 0;
        transition: top 75ms ease, opacity 75ms ease 0.12s;
        opacity: 0;
      }
      &:after {
        bottom: 0;
        transition: bottom 75ms ease,
          transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
        transform: rotate(-90deg);
      }
    `};
`;

export const Navigation = styled.nav`
  width: 100%;
  margin-bottom: var(--space-large);

  ul {
    ${({ theme }) => theme.mixins.flexColumn};
    ${({ theme }) => theme.mixins.boxShadow};

    width: 100%;
    font-family: var(--family-secondary);
    white-space: nowrap;
    font-size: clamp(25px, 6vw, 35px);
  }

  li {
    text-align: right;
    margin-bottom: var(--space-large);
    width: 100%;
  }
`;
