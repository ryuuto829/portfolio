import styled from 'styled-components';

export const OtherProject = styled.section`
  padding-top: 0;
  text-align: center;

  div {
    text-align: left;
  }

  .section-overline {
    font-size: var(--text-normal);
    font-weight: var(--weight-light);
    text-align: center;
    margin: 0 0 20px 0;
  }

  button {
    ${({ theme }) => theme.mixins.bigButton};

    margin: 80px auto 0px;
  }
`;

export const Blog = styled.section`
  padding-top: 0;
  text-align: center;

  .section-overline {
    font-size: var(--text-normal);
    font-weight: var(--weight-light);
    text-align: center;
    margin: 0 0 20px 0;
  }
`;
