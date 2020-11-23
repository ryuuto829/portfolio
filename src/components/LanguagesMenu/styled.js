import styled, { css } from 'styled-components';

export const MenuList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexItemsBetween};

  height: var(--nav-button-height);

  li {
    padding: var(--space-small);
  }
`;

export const LanguageLink = styled.button`
  font-size: var(--text-small);
  transition: var(--transition);
  text-transform: uppercase;
  color: inherit;

  ${props =>
    props.$currentLang &&
    css`
      font-weight: var(--weight-bold);
    `};
`;
