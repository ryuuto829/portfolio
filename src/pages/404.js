import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useTranslation } from '@hooks';

const NotFound = () => {
  const { page404 } = useTranslation();

  return (
    <>
      <Helmet title="Page Not Found" />

      <Container>
        <h1>404</h1>
        <h2>{page404.pageNotFound}</h2>
        <HomeLink to="/">{page404.goHome}</HomeLink>
      </Container>
    </>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.mixins.flexItemsCenter};

  flex-direction: column;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-family: var(--family-secondary);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
    font-weight: var(--weight-normal);
    padding-right: 10px;
  }

  h2 {
    font-size: clamp(30px, 5vw, 50px);
    font-weight: var(--weight-light);
  }
`;

const HomeLink = styled(Link)`
  ${({ theme }) => theme.mixins.link};

  margin-top: 50px;
`;

export default NotFound;
