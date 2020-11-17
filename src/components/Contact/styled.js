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
