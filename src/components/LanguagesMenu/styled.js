import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const MenuList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexItemsBetween};

  height: var(--nav-button-height);

  li {
    padding: var(--space-small);
  }
`;

export const LanguageLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};

  font-size: var(--text-small);
  transition: var(--transition);
  text-transform: uppercase;

  ${props =>
    props.$currentLang &&
    css`
      font-weight: var(--weight-bold);
    `};
`;
