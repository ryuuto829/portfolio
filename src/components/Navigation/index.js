import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { Link } from 'gatsby';
import {
  useScrollDirection,
  useScrolledToTop,
  useNavLinks,
  useLocale,
  useActiveLinkObserver
} from '@hooks';
import { IconLogo } from '@icons';
import { NavigationLinks, Menu, Transition } from '@components';

const Navigation = ({ isHome }) => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();
  const activeLink = useActiveLinkObserver();
  const { locale } = useLocale();

  // Query the JSON files in ./config/i18n/navLinks
  const { navLinks } = useNavLinks();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <nav>
        <Transition animation="fadeInDown">
          {isHome ? (
            <a
              href={locale === 'en' ? '/' : `/${locale}/`}
              aria-label="home"
              onClick={scrollToTop}>
              <IconLogo />
            </a>
          ) : (
            <Link
              to={locale === 'en' ? '/' : `/${locale}/`}
              aria-label="home"
              onClick={scrollToTop}>
              <IconLogo />
            </Link>
          )}
        </Transition>
        {navLinks && (
          <NavigationLinks
            listItems={navLinks}
            scrolledToTop={scrolledToTop}
            isHome={isHome}
            activeLink={activeLink}
          />
        )}
      </nav>
      <Menu navLinks={navLinks} />
    </S.Header>
  );
};

Navigation.propTypes = {
  isHome: PropTypes.bool.isRequired
};

export default Navigation;
