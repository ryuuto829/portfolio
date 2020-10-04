import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const NavLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};
  padding: 10px;
  transition: var(--transition);
  text-align: center;

  &:before {
    content: attr(data-title);
    display: block;
    font-weight: 700;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

export const NavItem = styled.li`
  margin: 0 5px;
  transition: var(--transition);
  position: relative;
  ${props =>
    props.isActive &&
    css`
      font-weight: 700;
    `};

  /* Decoration for hover outwards animating */
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 0px;
    height: 2px;
    transition: var(--transition);
    transition-duration: 0.4s;
    opacity: 0;
    background-color: var(--light-blue);
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  &:hover {
    &:before,
    &:after {
      width: 100%;
      opacity: 1;
      width: 50%;
    }
  }
`;

export const NavList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexItemsBetween};
`;
