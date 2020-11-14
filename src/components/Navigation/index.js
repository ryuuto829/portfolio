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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.NavigationBar
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}>
      <S.MainNavigation>
        <Link to="/" aria-label="home" onClick={scrollToTop}>
          <Logo />
        </Link>
        {navLinks && (
          <NavigationLinks listItems={navLinks} scrolledToTop={scrolledToTop} />
        )}
      </S.MainNavigation>
      <Menu navLinks={navLinks} />
    </S.NavigationBar>
  );
};

export default Navigation;
