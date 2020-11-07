import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';
import { useScrollDirection, useScrolledToTop, useNavLinks } from '@hooks';

import Logo from '@icons/Logo';
import NavigationLinks from '@components/NavigationLinks';
import Menu from '@components/Menu';

const Navigation = () => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();

  // Query the JSON files in ./config/i18n/navLinks
  const { navLinks } = useNavLinks();

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
      <Menu navLinks={navLinks} />
    </S.NavWrapper>
  );
};

export default Navigation;
