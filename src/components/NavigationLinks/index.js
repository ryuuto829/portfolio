import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { Link } from 'gatsby';
import { useLocale, useIsMounted } from '@hooks';
import { Transition } from '@components';

const NavigationLinks = ({ listItems, isHome, activeLink }) => {
  const { locale } = useLocale();
  const isMounted = useIsMounted();

  return (
    <S.NavList>
      {listItems.map(({ name, url }, i) => {
        // Extract id of the section from url like '/#work'
        const id = url.split('#')[1];

        return (
          <S.NavItem key={i} isActive={isHome && id === activeLink}>
            <Transition
              delay={`${i * 100}ms`}
              animation="fadeInLeft"
              skip={isMounted}>
              {isHome ? (
                <a href={locale === 'en' ? url : `/${locale}${url}`}>
                  <span>{name}</span>
                </a>
              ) : (
                <Link to={locale === 'en' ? url : `/${locale}${url}`}>
                  <span>{name}</span>
                </Link>
              )}
            </Transition>
          </S.NavItem>
        );
      })}
    </S.NavList>
  );
};

NavigationLinks.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired,
  isHome: PropTypes.bool.isRequired,
  activeLink: PropTypes.string
};

export default NavigationLinks;
