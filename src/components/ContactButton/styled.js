import styled from 'styled-components';

export const LinksGroup = styled.ul`
  ${({ theme }) => theme.mixins.list};

  display: flex;
  flex-wrap: wrap;
  position: relative;
  font-size: 16px;
  margin-top: 20px;

  li {
    ${({ theme }) => theme.mixins.flexItemsCenter};

    margin-top: 30px;
    position: relative;
    margin-right: 20px;

    @media (max-width: 480px) {
      &:before,
      span {
        display: none;
      }
    }
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

  .detail {
    font-size: var(--text-small);
    color: #ccc;
    margin-left: 10px;
  }
`;

export const foo = styled.a`
  ${({ theme }) => theme.mixins.bigButton};

  /*  */
  text-transform: none;
  letter-spacing: 0;
  font-weight: var(--weight-normal);
  /*  */

  &:hover .detail {
    color: inherit;
  }
`;
