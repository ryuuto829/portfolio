import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 5px;
  position: relative;

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
    background: linear-gradient(
      270.97deg,
      #ffe580 -21.36%,
      #ff7571 -2.45%,
      #ea5dad 26.84%,
      #c2a0fd 64.15%,
      #3bf0e4 108.29%,
      #b2f4b6 159.03%
    );
    transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      transform: scaleX(0.4);
    }
  }
`;

export const NavLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};
  ${({ theme }) => theme.mixins.flexItemsCenter};

  height: var(--nav-height-scroll);
  padding: 10px;
  transition: var(--transition);
`;
