import styled, { css } from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  margin-left: var(--space-extra);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  margin: 0 5px;

  ${({ isActive }) =>
    isActive &&
    css`
      a {
        font-weight: var(--weight-semibold);
      }
    `};

  a {
    ${({ theme }) => theme.mixins.flexItemsCenter};

    height: var(--nav-button-height);
    padding: 10px;
    transition: var(--transition);

    /* Decoration for hover outwards animating */
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -16px;
      border-radius: var(--border-radius);
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
  }
`;
