import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const MenuList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexItemsBetween};
`;

export const MenuItem = styled.li`
  padding: 10px;
`;

export const LanguageLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};
  font-size: var(--text-small);
  transition: var(--transition);

  ${props =>
    props.$currentLang &&
    css`
      font-weight: 700;
    `};
`;
