import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
`;

export const ControlsMenu = styled.div`
  display: ${props => (!props.showSidebar ? 'flex' : 'none')};

  & > ul {
    margin-left: 40px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: 40px;
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.mixins.button};

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
      background-color: var(--light-blue);
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Hamburger = styled.div`
  display: block;
  /* top: 50%; */
  margin-top: -2px;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 75ms;

  ${props =>
    props.showSidebar &&
    css`
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotate(45deg);
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
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colorMainText};
  }

  &:before,
  &:after {
    display: block;
    content: '';
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

export const NavigationList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexColumn};

  color: var(--text-color);
  font-family: var(--family-secondary);
  font-size: 3.5rem;
  white-space: nowrap;
  margin-left: 0;
  border-bottom: 1px solid #2e333e;
`;

export const NavItem = styled.li`
  padding: 10px;
  margin-bottom: 30px;
  width: 100%;
  text-align: left;
`;

export const NavLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};
`;

export const Navigation = styled.nav`
  width: 100%;
`;

export const SideMenu = styled.aside`
  ${({ theme }) => theme.mixins.flexColumn};

  visibility: ${props => (props.showSidebar ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  /* background-color: black; */
  background-color: transparent;
  transform: translateX(${props => (props.showSidebar ? '0' : '100vw')});
  transition: var(--transition);
  outline: 0;
  /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); */
  padding: 80px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    margin-bottom: 20px;

    &:last-child {
      margin: 0;
    }
  }

  nav {
    margin-bottom: 30px;
  }
`;
