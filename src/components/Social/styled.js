import styled from 'styled-components';

export const SideContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;

  @media (max-width: 1080px) {
    right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
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
