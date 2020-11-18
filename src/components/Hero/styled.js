import styled from 'styled-components';

export const HeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexColumn};

  align-items: center;
  min-height: 100vh;
  padding: var(--nav-height) 0;
  text-align: center;

  .greeting {
    margin: 0 0 var(--space-extra) 0;
    font-size: var(--text-large);
    color: var(--slate);
  }

  h1 {
    font-size: clamp(40px, 8vw, 80px);
    font-family: var(--family-secondary);
    font-weight: var(--weight-light);
    margin: -35px 0 0;
  }

  h2 {
    ${({ theme }) => theme.mixins.gradient};

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: clamp(40px, 6vw, 70px);
    font-weight: var(--weight-semibold);
    margin: 0;
    line-height: 1.3;
  }

  .bio {
    max-width: 500px;
    margin: var(--space-extra) 0 0 0;
    color: var(--slate);
  }

  a {
    margin-top: var(--space-extra);
  }
`;
