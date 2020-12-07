import styled from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => theme.mixins.flexItemsCenter};

  flex-direction: column;
  text-align: center;
  position: relative;
  height: auto;
  min-height: 200px;
  padding: 15px;
  z-index: 100;
`;

export const SocialMenu = styled.ul`
  ${({ theme }) => theme.mixins.list};
  ${({ theme }) => theme.mixins.flexItemsCenter};
  margin: 0 0 20px 0;

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
  /* position: relative;

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
  } */
`;

export const Credit = styled.div`
  font-size: var(--text-small);
  color: ${({ theme }) => theme.colorSecondaryText};
  padding: var(--space-small);

  p {
    margin: 0 0 var(--space-small);
  }

  p:last-of-type {
    margin: 0;
  }
`;

export const GatsbyLink = styled.a`
  ${({ theme }) => theme.mixins.link};
`;

export const ToTop = styled.div`
  position: absolute;
  top: -76px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colorMainBackground};
  border-radius: var(--border-radius);
  cursor: pointer;
`;
