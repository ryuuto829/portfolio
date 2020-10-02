import styled from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => theme.mixins.button};
  ${({ theme }) => theme.mixins.flexItemsCenter};
  padding: 0 5px;
  user-select: none;

  &:hover {
    fill: var(--light-blue);
  }
`;
