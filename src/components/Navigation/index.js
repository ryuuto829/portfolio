import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
import { useScrollDirection, useScrolledToTop, useTranslation } from '@hooks';

import Logo from '@icons/Logo';
import NavigationLinks from '@components/NavigationLinks';
import LanguagesMenu from '@components/LanguagesMenu';
import ButtonTheming from '@components/ButtonTheming';
import Menu from '@components/Menu';

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

  // Query the JSON files in ./config/i18n/navLinks
  const { allFile } = useStaticQuery(query);
  const { navLinks } = useTranslation(allFile);

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
        <Menu navLinks={navLinks} />
      </S.ControlsMenu>
    </S.NavWrapper>
  );
};

export default Navigation;
