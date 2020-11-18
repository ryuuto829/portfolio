import styled from 'styled-components';

export const Menu = styled.ul`
  margin-top: 50px;
  font-family: var(--family-secondary);
  font-size: 20px;
  font-weight: 300;
  text-align: left;

  li {
    ${({ theme }) => theme.mixins.boxShadow};

    padding: 20px;
  }
`;
