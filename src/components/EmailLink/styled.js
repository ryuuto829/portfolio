import styled from 'styled-components';

export const EmailLink = styled.a`
  ${({ theme }) => theme.mixins.bigButton};

  /*  */
  text-transform: none;
  letter-spacing: 0;
  font-weight: var(--weight-normal);
  /*  */

  &:hover .detail {
    color: inherit;
  }

  button {
    position: relative;
    margin-left: 10px;
    padding: 6px;
    background-color: #27272c;
    color: ${({ theme }) => theme.colorMainText};
    border-radius: 4px;
    transition: var(--transition);
    z-index: 2;

    &:hover {
      background-color: var(--light-blue);
      color: var(--almost-black);
    }
  }
`;
