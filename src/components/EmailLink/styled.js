import styled from 'styled-components';

export const EmailLink = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  text-transform: none;
  letter-spacing: 0;
  font-weight: var(--weight-normal);

  .email-content {
    padding-right: var(--space-small);
    border-right: 1px solid;
  }

  .copy-button {
    ${({ theme }) => theme.mixins.flexItemsCenter};
    position: relative;
    margin-left: var(--space-small);
    padding: 6px;
    color: ${({ theme }) => theme.mainText};
    border-radius: var(--border-radius);
    color: inherit;
    outline: 0;
    z-index: 20;

    svg {
      margin: 0;
    }
  }

  @media (max-width: 480px) {
    .email-content {
      border-right: 0;
      padding-right: 0;
    }

    svg,
    .copy-button {
      display: none;
    }
  }
`;
