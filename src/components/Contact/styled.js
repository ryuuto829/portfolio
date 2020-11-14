import styled from 'styled-components';

export const foo = styled.section`
  /*  */
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(
      30deg,
      #d367c1 10%,
      #dedf40 25%,
      #62cb5c 50%,
      #00bbcb 75%,
      #ab79d6 90%
    );
  }
  /*  */

  h2 {
    margin-bottom: 50px;
    text-align: center;
  }

  p {
    margin: 0 auto;
    font-weight: var(--weight-light);
    line-height: 160%;
    text-align: center;
    max-width: 600px;
  }

  ul {
    margin-top: 50px;
  }
`;

export const LinksGroup = styled.ul`
  ${({ theme }) => theme.mixins.list};

  display: flex;
  flex-wrap: wrap;
  position: relative;
  font-size: 16px;
  margin-top: 20px;

  /*  */
  justify-content: center;
  /*  */

  li {
    ${({ theme }) => theme.mixins.flexItemsCenter};

    margin-top: 30px;
    position: relative;
    margin-right: 20px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 48px;
      height: 48px;
      background-color: #27272c;
      border-radius: 34px;
      transition: var(--transition);
      z-index: 1;
    }

    &:hover {
      &:before {
        width: 100%;
      }

      svg {
        transform: translateX(15px);
      }
    }

    @media (max-width: 480px) {
      &:before,
      span {
        display: none;
      }
    }
  }

  a {
    ${({ theme }) => theme.mixins.link};

    display: block;
    position: relative;
    padding: 10px 20px 10px 58px;
    color: ${({ theme }) => theme.colorMainText};
    line-height: 24px;
    z-index: 2;

    @media (max-width: 480px) {
      & {
        padding: 10px 20px 10px 0px;
      }
    }
  }

  span {
    ${({ theme }) => theme.mixins.flexItemsCenter};

    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    height: 48px;
    width: 48px;

    svg {
      transition: var(--transition);
      transform: translateX(12px);
      fill: ${({ theme }) => theme.colorMainText};
    }
  }

  button {
    ${({ theme }) => theme.mixins.button};

    position: relative;
    padding: 6px;
    background-color: #27272c;
    color: ${({ theme }) => theme.colorMainText};
    border-radius: 4px;
    margin-right: 20px;
    transition: var(--transition);
    z-index: 2;

    &:hover {
      background-color: var(--light-blue);
      color: var(--almost-black);
    }
  }
`;
