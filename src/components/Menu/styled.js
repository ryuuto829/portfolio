import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => theme.mixins.button};
  width: 40px;
  height: 40px;
  padding: 5px;
  box-sizing: content-box;
  transition: var(--transition);
  z-index: 20;
  display: none;
  position: relative;

  &:hover {
    div,
    div:before,
    div:after {
      background-color: var(--light-blue);
    }
  }

  @media (max-width: 788px) {
    display: block;
  }
`;

export const Hamburger = styled.div`
  top: 50%;
  display: block;
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
    background-color: var(--light-gray);
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
  ${({ theme }) => theme.mixins.flexItemsBetween};

  flex-direction: column;
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
