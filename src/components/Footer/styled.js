import styled from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => theme.mixins.flexItemsCenter};

  flex-direction: column;
  text-align: center;
  position: relative;
  min-height: 200px;
  padding: 15px;
  z-index: 100;

  border-top: 1px solid ${({ theme }) => theme.border};

  .credentials {
    font-size: var(--text-small);
    color: ${({ theme }) => theme.secondaryText};
    padding: var(--space-small);

    p {
      margin: 0 0 var(--space-small);
    }

    p:last-of-type {
      margin: 0;
    }
  }
`;

export const SocialMenu = styled.ul`
  ${({ theme }) => theme.mixins.flexItemsCenter};

  flex-wrap: wrap;
  margin: 40px 0 20px 0;
  font-weight: var(--weight-light);

  li {
    margin-right: var(--space-large);
  }

  & li:last-child {
    margin-right: 0;
  }

  a {
    ${({ theme }) => theme.mixins.bigLink};
  }
`;

export const ToTopButton = styled.div`
  position: absolute;
  top: -41px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: var(--space-small);
  background-color: ${({ theme }) => theme.mainBackground};
  border-radius: var(--border-radius);
  cursor: pointer;
`;
