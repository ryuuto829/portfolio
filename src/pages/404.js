import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useTranslation } from '@hooks';

import SEO from '@components/SEO';
import Social from '@components/Social';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

const NotFound = () => {
  const { page404 } = useTranslation();

  return (
    <>
      <SEO title={page404.pageNotFound} />

      <Navigation />
      <Social />
      <div id="content">
        <Container>
          <h1>404</h1>
          <h2>{page404.pageNotFound}</h2>
          <Button to="/">{page404.goHome}</Button>
        </Container>
        <Footer />
      </div>
    </>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.mixins.flexItemsCenter};
  flex-direction: column;

  h1 {
    margin: 0;
    margin-bottom: 20px;
    font-family: var(--family-secondary);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
    font-weight: var(--weight-normal);
  }

  h2 {
    margin: 0;
    font-size: clamp(30px, 5vw, 50px);
    font-weight: var(--weight-light);
  }
`;

const Button = styled(Link)`
  ${({ theme }) => theme.mixins.link};

  margin-top: 50px;
`;

export default NotFound;
