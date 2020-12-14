import styled from 'styled-components';

export const ContactSection = styled.section`
  position: relative;
  margin-bottom: 100px;
  text-align: center;

  /* &:after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: 0;
    left: 0;
    height: 2px;
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
    ); */
  }

  h2 {
    margin-bottom: var(--space-huge);
  }

  p {
    margin: 0 auto;
    font-weight: var(--weight-light);
    /* line-height: 160%; */
    text-align: center;
    max-width: 600px;
  }

  ul,
  a {
    margin-top: var(--space-huge);
  }
`;
