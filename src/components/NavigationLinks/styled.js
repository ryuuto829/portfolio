import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const NavLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};
  ${({ theme }) => theme.mixins.flexItemsCenter};

  height: 64px;
  padding: 10px;
  transition: var(--transition);
`;

export const NavItem = styled.li`
  margin: 0 5px;
  position: relative;
  transition: var(--transition);

  ${props =>
    props.isActive &&
    css`
      font-weight: var(--weight-semibold);
    `};

  /* Decoration for hover outwards animating */
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(87.54deg, #5a32a3 -6.8%, #d73a49 124.14%);
    transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      transform: scaleX(0.4);
    }
  }
`;

export const NavList = styled.ul`
  ${({ theme }) => theme.mixins.list};

  display: flex;
`;
