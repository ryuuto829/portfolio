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
    /* font-size: clamp(40px, 8vw, 60px); */
    margin: 0 0 10px 0;
    font-family: var(--family-secondary);
    line-height: 1.2;
    font-weight: var(--weight-bold);
  }

  & > span {
    margin-bottom: 30px;
    font-size: 25px;
  }

  p {
    margin: 30px 0 0 0;
    max-width: 500px;
    font-size: 20px;
    color: #8a919e;
  }
`;

export const LinksGroup = styled.ul`
  ${({ theme }) => theme.mixins.list};

  display: flex;
  position: relative;

  font-size: 16px;
  margin-top: 50px;

  li {
    ${({ theme }) => theme.mixins.flexItemsCenter};
    position: relative;
    margin-right: 10px;

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
  }

  a {
    ${({ theme }) => theme.mixins.link};
    display: block;
    padding: 10px;
    position: relative;
    padding-left: 58px;
    padding-right: 20px;
    color: ${({ theme }) => theme.colorMainText};
    z-index: 100;
    line-height: 24px;
  }

  .circle {
    ${({ theme }) => theme.mixins.flexItemsCenter};
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
    background-color: #27272c;
    border-radius: 34px;
    transition: var(--transition);
    z-index: 1;

    svg {
      transition: var(--transition);
      transform: translateX(12px);
      fill: ${({ theme }) => theme.colorMainText};
    }
  }

  button {
    ${({ theme }) => theme.mixins.button};

    padding: 6px;
    background-color: #dfdfdf;
    color: var(--almost-black);
    border-radius: 4px;
    z-index: 100;
    position: relative;
    margin-right: 20px;
    transition: var(--transition);

    &:hover {
      background-color: var(--light-blue);
    }
  }
`;
