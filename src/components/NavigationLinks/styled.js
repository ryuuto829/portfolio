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
    padding: var(--space-small);
    height: var(--nav-button-height);
    transition: var(--transition);

    /* Decoration for navigation links */
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -16px;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: var(--border-radius);
      background: ${({ theme }) => theme.primaryColor};
      transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
      transition: var(--transition);
    }

    &:hover {
      &:after {
        transform: scaleX(0.4);
      }
    }
  }
`;
