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
  position: relative;

  &::before, &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    content: '';
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-50%) translateY(-50%) scale(0.2);
    z-index: -1;
  }

  &::after {
    width: 50px;
    height: 50px;
    border-width: 6px;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
}
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
`;

export const Credit = styled.p`
  font-size: var(--text-small);
  color: #707886; // Move to global style
  text-align: center;
`;

export const GatsbyLink = styled.a`
  ${({ theme }) => theme.mixins.link};
`;
