import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import * as S from './styled';

import Logo from '../icons/Logo';
import NavigationLinks from '../NavigationLinks';
import LanguagesMenu from '../LanguagesMenu';
import ButtonTheming from '../ButtonTheming';

const Navigation = () => (
  <S.NavWrapper>
    <S.NavigationBar>
      <Link to="/" aria-label="home">
        <Logo />
      </Link>
      {navLinks && <NavigationLinks listItems={navLinks} />}
    </S.NavigationBar>
    <S.ControlsMenu>
      <ButtonTheming />
      <LanguagesMenu />
    </S.ControlsMenu>
  </S.NavWrapper>
);

export default Navigation;
