import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};
  padding: 10px;
`;

export const NavItem = styled.li`
  margin: 0 5px;
`;

export const NavList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexItemsBetween};
`;
