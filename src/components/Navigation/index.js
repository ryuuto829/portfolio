import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
import { useScrollDirection, useScrolledToTop, useLocale } from '@hooks';

import Logo from '@icons/Logo';
import NavigationLinks from '../NavigationLinks';
import LanguagesMenu from '../LanguagesMenu';
import ButtonTheming from '../ButtonTheming';

const query = graphql`
  query useNavLinks {
    allFile(filter: { relativeDirectory: { eq: "navLinks" } }) {
      edges {
        node {
          name
          childNavLinksJson {
            navLinks {
              name
              url
            }
          }
        }
      }
    }
  }
`;

const Navigation = () => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();
  const { locale } = useLocale();

  // Query the JSON files in ./config/i18n/navLinks
  const { allFile } = useStaticQuery(query);

  // Extract all lists from GraphQL query response
  const queryList = allFile.edges.map(item => ({
    name: item.node.name,
    navLinks: item.node.childNavLinksJson.navLinks
  }));

  // Return list of links for the current locale
  const { navLinks } = queryList.filter(lang => lang.name === locale)[0];

  return (
    <S.NavWrapper
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}>
      <S.NavigationBar>
        <Link to="/" aria-label="home">
          <Logo />
        </Link>
        {navLinks && (
          <NavigationLinks listItems={navLinks} scrolledToTop={scrolledToTop} />
        )}
      </S.NavigationBar>
      <S.ControlsMenu>
        <ButtonTheming />
        <LanguagesMenu />
      </S.ControlsMenu>
    </S.NavWrapper>
  );
};

export default Navigation;
