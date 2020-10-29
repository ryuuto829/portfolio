import styled from 'styled-components';

export const SocialMenu = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexItemsCenter};
  padding: 20px 0;

  & li:first-child {
    margin-left: 0;
  }
`;

export const SocialItem = styled.li`
  font-size: 2.5rem;
  margin-left: 3rem;
  font-weight: 300;
`;

export const SocialLink = styled.a`
  ${({ theme }) => theme.mixins.link};
  font-family: var(--family-secondary);
`;

export const Credit = styled.p`
  font-size: var(--text-small);
  color: #707886; // Move to global style
  text-align: center;
`;

export const GatsbyLink = styled.a`
  ${({ theme }) => theme.mixins.link};
`;
