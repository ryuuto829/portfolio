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
  }

  h2 {
    background: linear-gradient(
      269.16deg,
      #ffe580 -15.83%,
      #ff7571 -4.97%,
      #ff7270 15.69%,
      #ea5dad 32.43%,
      #c2a0fd 50.09%,
      #9867f0 67.47%,
      #3bf0e4 84.13%,
      #33ce43 105.13%,
      #b2f4b6 123.24%
    );
    background-position: 58% 50%;
    background-size: 500%;
    animation: gradient-shift 30s ease infinite;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  h1 {
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
