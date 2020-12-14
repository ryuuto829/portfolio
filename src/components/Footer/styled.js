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

  border-top: 1px solid #2e333e;
`;

export const SocialMenu = styled.ul`
  /* ${({ theme }) => theme.mixins.list}; */
  ${({ theme }) => theme.mixins.flexItemsCenter};

  flex-wrap: wrap;
  margin: 40px 0 20px 0;

  & li:last-child {
    margin-right: 0;
  }
`;

export const SocialItem = styled.li`
  font-size: 2.5rem;
  margin-right: 3rem;
  font-weight: 300;
`;

export const SocialLink = styled.a`
  ${({ theme }) => theme.mixins.link};

  font-family: var(--family-secondary);
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
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colorMainBackground};
  border-radius: var(--border-radius);
  cursor: pointer;
`;
