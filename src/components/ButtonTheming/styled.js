import styled from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => theme.mixins.flexItemsCenter};

  padding: 5px;
  user-select: none;
  height: var(--nav-button-height);

  & svg {
    fill: ${({ theme }) => theme.colorMainText};
    transition: var(--transition);

    &:hover {
      fill: ${({ theme }) => theme.colorActive};
    }
  }
`;
