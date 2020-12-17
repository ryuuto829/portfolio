import styled from 'styled-components';

export const HeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexColumn};

  align-items: center;
  min-height: 100vh;
  padding: var(--nav-height) 0;
  text-align: center;

  .greeting {
    margin: 0;
    margin-bottom: var(--space-extra);
    font-size: clamp(var(--text-normal), 4vw, var(--text-large));
    color: ${({ theme }) => theme.secondaryText};
  }

  h1 {
    font-size: clamp(40px, 8vw, 80px);
    font-family: var(--family-secondary);
    font-weight: var(--weight-light);
    margin: -35px 0 0;
  }

  h2 {
    color: var(--salmon);

    font-size: clamp(40px, 6vw, 70px);
    font-weight: var(--weight-semibold);
    line-height: 1.3;
  }

  .bio {
    max-width: 500px;
    margin: var(--space-extra) 0;
    color: ${({ theme }) => theme.secondaryText};
  }

  .resume-link {
    ${({ theme }) => theme.mixins.link};
  }
`;
