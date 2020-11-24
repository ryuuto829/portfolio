import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';
import {
  useScrollDirection,
  useScrolledToTop,
  useNavLinks,
  useLocale
} from '@hooks';
import { IconLogo } from '@icons';
import { NavigationLinks, Menu, Transition } from '@components';

const Navigation = () => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();
  const { locale } = useLocale();

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
        <Transition animation="fadeInDown">
          <Link
            to={locale === 'en' ? '/' : `/${locale}/`}
            aria-label="home"
            onClick={scrollToTop}>
            <IconLogo />
          </Link>
        </Transition>
        {navLinks && (
          <NavigationLinks listItems={navLinks} scrolledToTop={scrolledToTop} />
        )}
      </S.MainNavigation>
      <Menu navLinks={navLinks} />
    </S.NavigationBar>
  );
};

export default Navigation;
