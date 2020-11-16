import styled from 'styled-components';

export const Title = styled.h3`
  font-size: var(--text-normal);
  font-weight: var(--weight-light);
  text-align: center;
  margin: 20px 0;
`;

export const Button = styled.button`
  ${({ theme }) => theme.mixins.bigButton};
`;

export const Button1 = styled.button`
  ${({ theme }) => theme.mixins.smallButton};
`;
