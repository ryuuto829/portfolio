import styled from 'styled-components';

export const HeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexColumn};

  min-height: 100vh;
  padding: var(--nav-height) 0;
  max-width: 1000px;
  margin: 0px auto;

  h1,
  h2 {
    font-size: clamp(40px, 8vw, 80px);
    margin: 0;
    font-family: var(--family-secondary);
    line-height: 1.3;
    font-weight: var(--weight-bold);

    background: linear-gradient(
      270.97deg,
      #ffe580 -21.36%,
      #ff7571 -2.45%,
      #ea5dad 26.84%,
      #c2a0fd 64.15%,
      #3bf0e4 108.29%,
      #b2f4b6 159.03%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  & > span {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 25px;
  }

  p {
    margin: 30px 0 0 0;
    max-width: 500px;
    font-size: 17px;
    color: var(--slate);
    line-height: 160%;
  }
`;

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
