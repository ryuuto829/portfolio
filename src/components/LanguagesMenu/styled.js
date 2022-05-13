import styled, { css } from 'styled-components';

export const MenuList = styled.ul`
  ${({ theme }) => theme.mixins.flexItemsBetween};
  height: var(--nav-button-height);

  li {
    padding: var(--space-small);
  }
`;

export const LanguageButton = styled.button`
  font-size: var(--text-small);
  text-transform: uppercase;
  transition: var(--transition);

  ${props =>
    props.$currentLang &&
    css`
      font-weight: var(--weight-bold);
    `};

  &:hover {
    color: ${({ theme }) => theme.active};
  }
`;
