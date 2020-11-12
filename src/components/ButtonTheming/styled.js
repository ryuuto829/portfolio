import styled from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => theme.mixins.button};
  ${({ theme }) => theme.mixins.flexItemsCenter};

  padding: 5px;
  user-select: none;

  & svg {
    fill: ${({ theme }) => theme.colorMainText};
    transition: var(--transition);

    &:hover {
      fill: var(--light-blue);
    }
  }
`;
