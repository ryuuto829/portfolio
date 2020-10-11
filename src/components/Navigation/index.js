import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import * as S from './styled';

import Logo from '../icons/Logo';
import NavigationLinks from '../NavigationLinks';
import LanguagesMenu from '../LanguagesMenu';
import ButtonTheming from '../ButtonTheming';
import { useScrollDirection, useScrolledToTop } from '@hooks';

const Navigation = () => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();

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
