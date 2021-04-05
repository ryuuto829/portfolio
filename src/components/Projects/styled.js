import styled from 'styled-components';

export const OtherProject = styled.section`
  padding-top: 0;
  text-align: center;

  .section-overline {
    font-size: var(--text-normal);
    font-weight: var(--weight-light);
    text-align: center;
    margin: 0 0 20px 0;
  }

  .show-more {
    ${({ theme }) => theme.mixins.bigButton};

    margin: 80px auto 0px;
  }
`;
