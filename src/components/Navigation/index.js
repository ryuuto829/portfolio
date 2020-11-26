import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { Link } from 'gatsby';
import {
  useScrollDirection,
  useScrolledToTop,
  useNavLinks,
  useLocale,
  useActiveLinkObserver,
  useTranslation
} from '@hooks';
import { IconLogo } from '@icons';
import { NavigationLinks, Menu, Transition } from '@components';

const Navigation = ({ isHome, isDefault }) => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();
  const activeLink = useActiveLinkObserver();
  const { home } = useTranslation();
  const { locale } = useLocale();

  // Query the JSON file in ./config/i18n/navLinks to get all links routes
  const { navLinks } = useNavLinks();

  // Gatsby persists scroll position, but we want to go to the start of the page
  // when cliking on the branding logo
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <nav>
        <Transition animation="fadeInDown">
          <Link
            to={isDefault ? '/' : `/${locale}/`}
            aria-label={home}
            onClick={scrollToTop}>
            <IconLogo />
          </Link>
        </Transition>
        {navLinks && (
          <NavigationLinks
            listItems={navLinks}
            scrolledToTop={scrolledToTop}
            isHome={isHome}
            activeLink={activeLink}
            isDefault={isDefault}
          />
        )}
      </nav>
      <Menu navLinks={navLinks} />
    </S.Header>
  );
};

Navigation.propTypes = {
  isHome: PropTypes.bool.isRequired,
  isDefault: PropTypes.bool.isRequired
};

export default Navigation;
