import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`;

export const SocialList = styled.ul`
  ${({ theme }) => theme.mixins.list};
`;

export const SocialItem = styled.li`
  padding: 10px;
`;

export const SocialLink = styled.a`
  ${({ theme }) => theme.mixins.link};
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
  }
`;
