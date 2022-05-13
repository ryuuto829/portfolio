import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as S from './styled';
import {
  useScrollDirection,
  useScrolledToTop,
  useNavLinks,
  useActiveLinkObserver,
  useTranslation
} from '@hooks';
import { IconLogo } from '@icons';
import { NavigationLinks, Menu, Transition } from '@components';
import { localizedLink } from '@utils';

const Navigation = ({ isHome, isDefault, locale }) => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();
  const activeLink = useActiveLinkObserver();
  const { home } = useTranslation();

  // Query the JSON file in './config/i18n/navLinks' to get list of routes
  const { navLinks } = useNavLinks();

  return (
    <S.Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <nav>
        <Transition animation="fadeInDown">
          <Link
            to={localizedLink(`/`, locale, isDefault)}
            aria-label={home}
            className="branding">
            <IconLogo />
          </Link>
        </Transition>
        {navLinks && (
          <NavigationLinks
            locale={locale}
            listItems={navLinks}
            scrolledToTop={scrolledToTop}
            isHome={isHome}
            activeLink={activeLink}
            isDefault={isDefault}
          />
        )}
      </nav>
      <Menu navLinks={navLinks} isDefault={isDefault} locale={locale} />
    </S.Header>
  );
};

Navigation.propTypes = {
  isHome: PropTypes.bool.isRequired,
  isDefault: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired
};

export default Navigation;
