import styled from 'styled-components';

export const Menu = styled.div`
  margin-top: 50px;
  font-family: var(--family-secondary);
  font-size: clamp(var(--text-normal), 6vw, 22px);
  font-weight: 300;
  text-align: left;

  div {
    ${({ theme }) => theme.mixins.boxShadow};

    padding: 20px;
    transition: var(--transition);

    &:hover {
      transform: translateX(5px);
    }

    a {
      width: 100%;
    }
  }
`;

export const BlogSection = styled.section`
  padding-top: 0;
  text-align: center;

  .section-overline {
    font-size: var(--text-normal);
    font-weight: var(--weight-light);
    text-align: center;
    margin: 0 0 20px 0;
  }

  .show-blog {
    ${({ theme }) => theme.mixins.bigButton};

    margin: 80px auto 0px;
  }
`;
